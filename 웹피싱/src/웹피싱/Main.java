package 웹피싱;

import java.io.BufferedReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Main {

	public static void main(String[] args) throws Exception {
		
		String target ="http://www.naver.com";
		HttpURLConnection con = (HttpURLConnection) new URL(target).openConnection();
		BufferedReader br = new BufferedReadReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
		String temp;
		While((temp = br.readLine()) != null) {
			System.out.println(temp);
		}
		con.disconnect();
		br.close();
	}

	private static void While(boolean b) {
		// TODO Auto-generated method stub
		
	}

}

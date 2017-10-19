---
layout: page
title: "Q311815: PRB: WSACleanUp()  AV If Host Name Longer Than 54 Characters"
permalink: /kb/311/Q311815/
---

## Q311815: PRB: WSACleanUp()  AV If Host Name Longer Than 54 Characters

	Article: Q311815
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbAPI kbWinsock kbDSupport kbGrpDSNet
	Last Modified: 10-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run gethostbyname(), gethostbyaddr(), or gethostname() on a Windows NT
	4.0-based computer, the API returns the correct information. However, when you
	call WSACleanUp(), an access violation occurs and the program fails.
	
	NOTE: This problem does not occur on Windows 2000.
	
	RESOLUTION
	==========
	
	To avoid this problem, do not use host names that contain more than 54
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Right-click Network Neighborhood, and then click Properties.
	
	2. Click the Protocol tab, and then select TCP/IP.
	
	3. Click the Properties button.
	
	4. Click the DNS tab. Change the host name to a name that has at least 54
	  characters.
	
	5. Run the following code:
	
	  #include <Winsock2.h>
	  #include <iostream.h>
	
	  int main(int argc,char* argv[])
	  {
	  	WSADATA wsaData;
	  	char pStr[512]={0};
	  	int ret;
	  	
	  	if(WSAStartup(0x0101,&wsaData)) {
	  		cout<<"WSAStartup ";
	  		cout << " error: ?<<WSAGetLastError()<<endl;
	  		return 0;
	  	}
	  	cout<<argv[1]<<endl;
	  		
	  	if(gethostname(pStr,512)) {
	  		cout<<"gethostbyname ";
	  		cout << " error: ?<<WSAGetLastError()<<endl;
	  		WSACleanup();
	  		return 0;
	  	}
	  	cout<<"host name: " <<pStr<<endl;
	  	
	  	ret=WSACleanup ();
	  	if(ret) {
	  		cout<<"WSACleanup ";
	  		cout << " error: ?<<WSAGetLastError()<<endl;
	  		return 0;
	  	}
	  	return 0;
	  }
	
	An access violation occurs when the call is made to WSACleanUp().
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbWinsock kbDSupport kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTW400SP6a
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

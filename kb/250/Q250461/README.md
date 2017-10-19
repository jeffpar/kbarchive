---
layout: page
title: "Q250461: BUG: WSALookupServiceNext Returns Incomplete Data"
permalink: /kb/250/Q250461/
---

## Q250461: BUG: WSALookupServiceNext Returns Incomplete Data

	Article: Q250461
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbOSWin2000 kbOSWin2000bug kbSDKPlatform kbSDKWin32 kbWinsock kbDSuppor
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are doing a namespace query for the SVCID_HOSTNAME globally unique
	identifier (GUID) and use the WSALookupServiceNext Winsock API to dynamically
	determine the buffer size required for the WSAQUERYSET, the subsequent call to
	WSALookupServiceNext with the allocated buffer returns incomplete data and
	should not be relied upon.
	
	RESOLUTION
	==========
	
	To work around this problem, you can allocate an appropriately sized buffer
	before you make the first call to WSALookupServiceNext.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following code exhibits the bug on Windows 2000, whereas on Windows NT 4.0
	this code works as expected.
	
	If you uncomment the lines noted in the code, the call works because the buffer
	is allocated beforehand.
	
	  #include <stdio.h>      // Standard I/O
	  #include <winsock2.h>   // winsock 2.0
	  #include <svcguid.h>    // guids
	
	  int main(int argc, char * argv[])
	  {
	    WSADATA wsaData;
	    DWORD dwResult;
	    HANDLE hLookup = 0;
	    WSAQUERYSET lpRestrictions;
	    GUID guid = SVCID_HOSTNAME;
	
	    dwResult = WSAStartup(MAKEWORD(2,2), &wsaData);
	
	    if (dwResult != 0)
	      {
	      printf("Cannot startup Winsock: %d\n", dwResult);
	      exit(1);
	      }
	
	    ZeroMemory(&lpRestrictions, sizeof(WSAQUERYSET));
	    lpRestrictions.dwSize = sizeof(WSAQUERYSET);
	    lpRestrictions.lpServiceClassId = &guid;
	
	    dwResult = WSALookupServiceBegin(&lpRestrictions, LUP_RETURN_NAME, &hLookup);
	    if (dwResult != SOCKET_ERROR)
	      {
	      DWORD dwLength = 0;
	      WSAQUERYSET * pqs = NULL;
	      
	      // 
	      // picking an arbitrary value works fine 
	      // 
	      // UNCOMMENT below for success on Windows 2000
	      // 
	      // pqs = (WSAQUERYSET *) malloc(sizeof(WSAQUERYSET) + 100);
	      // dwLength = sizeof(WSAQUERYSET) + 100;
	      // 
	
	      do
	        {
	        if (WSALookupServiceNext(hLookup, 0, &dwLength, pqs) != 0)
	          dwResult = WSAGetLastError();
	        else
	          dwResult = 0;
	
	        if (dwResult == WSAEFAULT)
	          {
	          if (pqs) 
	            free(pqs);
	          pqs = (WSAQUERYSET *) malloc(dwLength);
	          if (!pqs)
	            {
	            printf("Could not allocate memory: %d\n", GetLastError());
	            exit(2);
	            }
	          else          
	            continue;
	          }
	        
	        // output it since we have it now        
	        if ((dwResult == 0) && (pqs))
	          printf("%s\n", pqs->lpszServiceInstanceName);
	
	        }
	        while ((dwResult != WSA_E_NO_MORE) && (dwResult != WSAENOMORE));      
	      
	      // clean-up
	      free(pqs);
	      WSALookupServiceEnd(hLookup);
	      }
	    else
	      {
	      printf("Error on WSALookupServiceBegin: %d\n", WSAGetLastError());
	      exit(3);
	      }
	    
	
	    WSACleanup();
	
	    return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbOSWin2000 kbOSWin2000bug kbSDKPlatform kbSDKWin32 kbWinsock kbDSupport kbGrpDSNet 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	

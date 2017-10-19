---
layout: page
title: "Q189262: FTP Passive Mode May Terminate Session"
permalink: /kb/189/Q189262/
---

## Q189262: FTP Passive Mode May Terminate Session

	Article: Q189262
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Information Server FTP service includes a passive mode command
	(PASV) to request that the server wait for a connection instead of initiating
	one after receiving a transfer command. Certain situations using multiple
	passive connections may result in errors, problems with system performance as
	well as denial of service situations for both the Web and FTP services.
	
	Server Administrators will see the following error in the System Event Log:
	
	  FTP Server could not create a client worker thread for user at host
	  <IPAddress>. The connection to this user is terminated. The data is
	  the error.
	
	Clients accessing either the WEB or FTP services may see a message similar to one
	of the following:
	
	- Connection closed by remote host
	
	- The FTP session was terminated
	
	CAUSE
	=====
	
	When multiple passive connections are made at the same time to a single FTP
	server it is possible to use up all available system threads for servicing
	clients. Any additional connection requests will result in the errors listed
	above until a client thread is available again.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: The fix for a bug in the W3 and FTP Performance Monitor ALSO fixes the
	problem described in this article. If you plan to use the Performance Monitor,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q185349 : Problems Remotely Accessing W3 or FTP Perfmon Counters
	
	To resolve this problem, download and install one of the following fixes or wait
	for the next Windows NT service pack.
	
	Intel Platforms
	---------------
	
	IIS 4.0:
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/iis4-ftpfix/ftpfix4i.exe
	
	IIS 3.0 and IIS 2.0:
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/iis3-ftpfix/ftpfix3i.exe
	
	Alpha Platforms
	---------------
	
	IIS 4.0:
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/iis4-ftpfix/ftpfix4a.exe
	
	IIS 3.0 and IIS 2.0:
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/iis3-ftpfix/ftpfix3a.exe
	
	NOTE: Each of the above URLs above is one path; it has been wrapped for
	readability.
	
	NOTE: You might also consider running the WEB and FTP services on separate
	servers to further decrease the possibility of attacks against multiple
	services.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q189271 : Minimal services to run on a secure IIS Server
	
	NOTE: This fix limits the denial of service attack and lessens it's severity.
	However, there will still be a limited effect on the operation of the FTP
	server. Clients that use PASV mode connections to connect to the FTP server may
	be denied service and clients that are uploading information to the FTP server
	may be denied service. If this attack occurs, there will be many event log
	entries of the type shown below. The event log entries will give the user name
	of the attacker and the IP address that originated the attack. This will enable
	the attacked machine's owner to deny the user or originating site access to the
	FTP server.
	
	Event Log Entries:
	
	1. Passive connect from user %1 at host %2 timed out. If you are seeing a large
	  number of these events, you may be experiencing a denial of service attack.
	  See http://www.microsoft.com/security for more information.
	
	2. File received from user %1 at host %2 timed out. If you are seeing a large
	  number of these events, you may be experiencing a denial of service attack.
	  See http://www.microsoft.com/security for more information.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in the Microsoft products listed at the beginning of this
	article. This problem was first corrected in Windows NT 4.0 Service Pack 4.0 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q181743 : Error Message 426 Trying to Retrieve File from FTP Server
	
	
	
	Additional query words: sp hot fix qfe www services
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400 kbiis300 kbiis200
	Version           : winnt:2.0,3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

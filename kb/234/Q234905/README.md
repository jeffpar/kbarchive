---
layout: page
title: "Q234905: Improperly Formatted HTTP Request May Cause INETINFO to Fail"
permalink: /kb/234/Q234905/
---

## Q234905: Improperly Formatted HTTP Request May Cause INETINFO to Fail

	Article: Q234905
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Web site visitor requests a selected file mapping, the request is mapped
	to an appropriate DLL for processing the visitor's request. The appropriate DLL
	may include any Microsoft DLL or an installed third-party filter DLL. A problem
	currently exists in the Microsoft DLLs for handling an improperly formatted
	request that uses an HTR, STM, or IDC application mapping. There is the
	possibility that this problem could be exploited by a malicious Web user by
	sending an improperly formatted HTTP request to a Microsoft Internet Information
	Server (IIS) computer, which can result in the unstable operation of the Web
	server.
	
	WORKAROUND
	==========
	
	Microsoft has provided a patch to correct this problem; however, additional
	steps can be used to prevent issues similar to this one from impacting any
	Microsoft IIS 4.0 computer. Selecting Check if file Exists in the script
	application mappings section of the ISM forces IIS 4.0 to check if the requested
	script exists or if the user has permission to the requested script. If not, the
	appropriate warning message is returned to the browser and the script engine is
	not invoked.
	
	To select Check if file Exists, perform the following steps:
	
	1. In the Internet Service Manager (ISM), double-click Internet Information
	  Server.
	
	2. Right-click the computer name and then click Properties.
	
	3. In the Master Properties drop-down box, click WWW Service, and then click
	  Edit.
	
	4. Click the Home Directory tab, and then click Configuration.
	
	5. Double-click the line in the extension mappings that contains .HTR.
	
	6. Select the Check if file exists check box.
	
	7. Repeat these steps for the STM and IDC application mappings.
	
	8. Close the ISM.
	
	NOTE: When you choose to use this option, the originating TCP\IP address of the
	request and the response is logged in the IIS log if IIS logging is turned on.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The effected application mappings are IDC, HTR, and STM.
	
	- HTR files enable remote administration of user passwords.
	
	- IDC Internet Database Connector files allows an Internet application to query
	  and update backend database.
	
	- STM is used for server-side Include files.
	
	Please see the following Microsoft Security Bulletin (MS99-019) for more
	information related to this issue:
	
	  Patch Available for "Malformed HTR Request" Vulnerability
	
	For additional security-related information about Microsoft products, please
	visit:
	
	  http://www.microsoft.com/security
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

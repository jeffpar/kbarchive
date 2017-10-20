---
layout: page
title: "Q216035: Invalid FPNW Parameters May Cause AV in Lsass.exe and Usrmgr.exe"
permalink: /kb/216/Q216035/
---

## Q216035: Invalid FPNW Parameters May Cause AV in Lsass.exe and Usrmgr.exe

{% raw %}

	Article: Q216035
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Lsass.exe and Usrmgr.exe may fail if one or more of the user parameters for the
	File and Print Services for NetWare (FPNW) service are invalid or corrupted.
	
	CAUSE
	=====
	
	When FPNW is installed on a domain controller and the "Maintain NetWare
	Compatible Login" option is selected in a user's profile, various parameters are
	enabled such as Grace Login Limit, Concurrent Connections, among others, for the
	user. If any of the parameters become corrupted, both Lsass.exe and Usrmgr.exe
	may fail.
	
	Lsass.exe is the service responsible for all domain related functions, such as
	user logon validation and user account management. If Lsass.exe fails, all
	domain related requests to the server will fail. When an account with corrupted
	or invalid data is processed, Lsass.exe may have an access violation or it may
	enter an invalid state and be unable to process any requests. A Drwtsn32.log
	file will be generated if Lsass.exe has an access violation. When Usrmgr.exe
	fails, it will terminate immediately and generate a Drwtsn32.log file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

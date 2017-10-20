---
layout: page
title: "Q123474: HOWTO: Logon With a Name Other than the System Logon"
permalink: /kb/123/Q123474/
---

## Q123474: HOWTO: Logon With a Name Other than the System Logon

{% raw %}

	Article: Q123474
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe300
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft SourceSafe for MS-DOS, versions 2.0x, 3.0x 
	- Microsoft SourceSafe for Windows, versions 2.0x, 3.0x 
	- Microsoft SourceSafe for Macintosh, versions 2.0x, 3.0x 
	- Microsoft SourceSafe for Windows NT, versions 2.0x, 3.0x 
	- Microsoft SourceSafe for UNIX, versions 2.0x, 3.0x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SourceSafe can automatically use the user name if the following network
	operating system and SourceSafe combinations are used:
	
	  Network Operating System      SourceSafe Version(s)
	  ----------------------------------------------------------
	
	  Windows NT 3.1 or greater     SourceSafe 2.X or greater,
	                                Windows NT or 32-bit
	                                version.
	
	  Novell Netware                SourceSafe 2.02 to 3.02
	
	  Macintosh                     SourceSafe 2.X for Macintosh
	
	However, occasionally, you may need to override this setting.
	
	MORE INFORMATION
	================
	
	1. Use the environment variables SSUSER and SSPWD to set the desired User Name
	  and Password.
	
	2. Use the -y parameter on the command line, as in this example:
	
	        SS GET <$/FileName> -yJANET,MYPWD
	
	3. Set the SourceSafe variable Use_Network to No to force SourceSafe to prompt
	  for the username and password.
	
	In Visual SourceSafe, you can force prompting for the User Name by going to the
	Visual SourceSafe Admin program and deselecting the "Use network name for
	automatic user logon" check box in the Options dialog box under the Tools menu.
	If you want this to occur for only one user, set the ini variable in the users
	SS.INI file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe300 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe2xDOSSearch kbSSafe2xSearch kbSSafe20xMacSearch kbSSafe20xUNIXSearch kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch kbSSafe20xNTSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

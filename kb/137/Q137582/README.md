---
layout: page
title: "Q137582: Using WINSCL.EXE"
permalink: /kb/137/Q137582/
---

## Q137582: Using WINSCL.EXE

{% raw %}

	Article: Q137582
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Winscl.exe is a command line administrative tool for managing Windows Internet
	Name Service (WINS) servers. This tool is available in the Windows NT 3.51 and
	4.0 Resource Kits. This article includes several tips for using Winscl.exe.
	
	MORE INFORMATION
	================
	
	- The WINS Server must be running to modify the WINS database with Winscl.exe.
	
	- WINSCL does not run under Windows NT 3.5.
	
	- You must have administrative permission to administer a WINS database. If you
	  run WINSCL from an untrusted domain, you must have a user name and password
	  that matches an administrative account on that domain.
	
	- WINSCL is case sensitive. The commands must be entered in upper-case, and
	  NetBIOS names must match those that appear in the WINS database exactly.
	
	- Many commands give you a choice to enter 1 to select an option. You can enter
	  0 to choose the other option. For example, when you first start WINSCL you
	  see:
	
	  TCP/IP or named pipe. Enter 1 for TCP/IP --
	
	  You can enter 0 to select named pipe.
	
	- WINSCL may indicate that a command was successful, such as when you add or
	  delete a WINS entry. You should Refresh and view the WINS database and verify
	  that the command was carried out successfully. There is no indication when a
	  command fails.
	
	- When removing WINS database entries, you must individually remove all the
	  names that a computer may register. For example, a typical Windows client
	  computer named "CHARLIE" would register three names, CHARLIE[00],
	  CHARLIE[20], and CHARLIE[03]. To totally remove CHARLIE from the database,
	  you must specifically remove all three names. The sixteenth character in the
	  [] brackets is what differentiates the three names.
	
	To use WINSCL to delete dynamic WINS entries, use the following steps:
	
	1. Type the following command and then press Enter.
	
	  WINSCL T
	
	  WINSCL prompts you for the IP address of the server running WINS.
	
	2. Enter the WINS server's IP address and then press Enter.
	
	3. Type the following command and then press Enter.
	
	  DN <ComputerName>
	
	  where ComputerName is the name of the computer you wish to remove.
	
	  WINSCL prompts you to enter 1 to select a 16th character. Enter a 1 and the
	  NetBIOS registration that you wish to remove. DO NOT include any backslashes
	  ('\\'), enter only the NetBIOS name. Each registration must be removed
	  separately.
	
	4. Type the following command and then press Enter.
	
	1
	
	5. Type the following command and then press Enter.
	
	  1B
	
	  WINSCL prompts you for a scope. Enter 0.
	
	6. Type the following command and then press Enter.
	
	0
	
	The entry has been removed from the WINS database. Refresh the WINS manager and
	verify the entry has been deleted.
	
	For more information on Winscl.exe, see the "Help for Windows NT Resource Kit
	Tools" or Winscl.txt in the Windows NT Resource Kit folder.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q142265: How to use Regini.exe to modify HKEY_CURRENT_USER"
permalink: /kb/142/Q142265/
---

## Q142265: How to use Regini.exe to modify HKEY_CURRENT_USER

	Article: Q142265
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Regini is a character-based batch file utility that you can use to add keys to
	the Windows NT Registry by specifying a registry script. This article explains
	how you can use REGINI.EXE to create a registry script to modify the
	HKEY_CURRENT_USER registry hive.
	
	MORE INFORMATION
	================
	
	To create a registry script, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, systemwide problems
	that may require you to reinstall Windows NT to correct them. Microsoft cannot
	guarantee that any problems resulting from the use of Registry Editor can be
	solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_USERS subtree, go to the following key and note the <User
	  Node>:
	
	  \HKEY_USERS\<User Node>
	
	  NOTE: The following user node is used for this example:
	
	  S-1-5-21-124525095-708259637-154311902-2419
	
	3. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Software
	
	4. From the Edit menu, select Add Key.
	
	5. Enter the Key name and click OK. For this example, use the key name: Test.
	
	6. For this example, enter the following:
	
	  Value Name: Engineer
	  Data Type: REG_SZ
	  String: JohnDoe
	
	7. Create a registry script file called TEST.REG and enter the following:
	
	  \registry\user\S-1-5-21-124525095-708259637-154311902-2419\software\test
	  Engineer = REG_SZ WZoltan
	
	  NOTE: Make sure there is a carriage return at the end of each line in the
	  registry script file. For additional information, please see the following
	  article(s) in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q139278
	  TITLE : Example in Windows NT Resource Kit For REGINI Does Not Work
	
	8. From the command line, type the following:
	
	  "Regini test.reg" (without the quotation marks)
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

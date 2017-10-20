---
layout: page
title: "Q148435: CMD.EXE Help Refers To Non-Existing Registry Key"
permalink: /kb/148/Q148435/
---

## Q148435: CMD.EXE Help Refers To Non-Existing Registry Key

{% raw %}

	Article: Q148435
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you type "CMD /?" (without quotes), the MS-DOS Command Prompt (CMD.EXE)
	Help information appears and it mentions the following registry key:
	
	HKEY_CURRENT_USER\Software\MicroSoft\Command Processor\EnableExtensions
	
	This Command Processor registry key does not exist.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_CURRENT_USER subtree:
	
	  \Software\Microsoft
	
	2. From the Edit menu, select Add Key.
	
	3. For the Key Name, enter: Command Processor
	
	4. Select the Command Processor key.
	
	5. From the Edit menu, select Add Value.
	
	6. Enter the following:
	
	  Value Name: EnableExtensions
	  Data Type: REG_DWORD
	  String: 1
	
	7. Click OK and quit Registry Editor.
	
	8. Shutdown and restart Windows NT.
	
	9. To verify that the Command Processor extensions are enabled, start the MS-DOS
	  Command Prompt (CMD.EXE) and type the following:
	
	  "assoc" (without the quotation marks)
	
	  A list of applications currently associated with file extensions appears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Command Extensions to the Windows NT version of CMD.EXE are an attempt to make
	CMD.EXE a more useful programming tool, while maintaining compatibility with
	existing command scripts. At the same time, given the diversity of usage of the
	command script language, the possibility exists that some incompatibility may be
	found. So the capability exists to enable or disable the extensions, either via
	the command line or via a command in a command script. This allows an escape for
	any potential compatiblity problems that may be found.
	
	The command extensions currently involve changes and/or additions to the
	following commands:
	
	- MKDIR creates any intermediate directories in the path if needed. The percent
	  (%) sign and a number in a batch script refers to all the arguments (for
	  example: %1 %2 %3 %4 %5).
	
	- DEL /s only displays files that are deleted and not those it could not find.
	
	- When you invoke the SET command with a variable name, no equal sign, or
	  value, the value of that variable appears. Non-executable files may be
	  invoked through its file association just by typing the name of the file as a
	  command. ASSOC is a new command that you can use to add, display or change
	  file associations.
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}

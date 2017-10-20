---
layout: page
title: "Q247095: XCLN: Outlook 98 Batch Mode Setup Switches for ODK"
permalink: /kb/247/Q247095/
---

## Q247095: XCLN: Outlook 98 Batch Mode Setup Switches for ODK

{% raw %}

	Article: Q247095
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use command-line switches to control how both the Setup.exe and
	Outlwzd.exe files are run. For example, you can use command-line switches to
	choose the installation mode, specify a quiet mode (which removes or reduces the
	prompts the user receives), or control whether the computer is restarted after
	installation.
	
	When users click Setup.exe in the CD folder of the customized package, it
	initiates the Autorun screen. The Autorun screen starts the appropriate
	Setup.exe file from the Language\Packages folder (for example, for English, it
	starts CD\EN\Packages\Setup.exe). When Packages\Setup.exe runs, it self-extracts
	and runs the Outlwzd.exe tool with the custom settings that you defined in the
	wizard.
	
	MORE INFORMATION
	================
	
	To use command-line switches with Setup.exe, use Wextract, an extraction utility
	based on Internet Express technology. The following are frequently used Wextract
	command-line switches:
	
	  /Q - Quiet mode
	
	  /QU - User-quiet mode, which presents some dialog boxes to the user
	
	  /QA - Administrator-quiet mode, which does not present any dialog boxes to the
	  user.
	
	  /C:<> - Path and name of the Setup .inf or .exe file
	
	  /R:N - Never restart
	
	  /R:A - Always restart
	
	  /R:S - Silent restart
	
	  /T:<directory path> - Target folder for extracting files
	
	A second group of command-line switches are used with the Outlwzd.exe tool.
	
	  /Q - Specifies a quiet "hands-free" mode. The user is prompted for
	  information that isn't specified.
	
	  /Q:A - Specifies a quiet mode with no user prompts.
	
	  /Q:C - Specifies a quiet mode with the Cancel button not displayed, so the
	  user cannot cancel Setup. This switch is used by the wizard if the "Install
	  package silently" option is selected.
	
	  /M:[0|1|2|3...] - Specifies the installation mode. For customized ODK
	  packages, 0 refers to the first installation choice, 1 refers to the second
	  choice, and so on (for example, 0=minimal, 1=standard, 2=full).
	
	  /I:[Y/N] - Indicates whether or not to install the Windows Desktop Update. The
	  default is N.
	
	  /S:""#e"" - Designates the source path of the Setup.exe file. The ""#e""
	  refers to the full path and name of the .exe file.
	
	  /U:""<path>"" - Specifies the path (file or network in Universal Naming
	  Convention format) for installation cabinet (.cab) files.
	  Do not use /U for CD-ROM installations.
	
	  /R:N - Suppresses restarting after installation. If you suppress restarting,
	  your program should take care of restarting the computer; Outlook will not be
	  properly configured until the computer is restarted.
	
	  /D - Specifies that you want to download only the files for the current
	  operating system.
	
	  /D:1 - Specifies that you want to download files for Microsoft Windows and
	  Windows NT operating systems.
	
	  /G: - Runs specified installation sections in the Outsetup.inf file. Separate
	  the sections with commas.
	
	  /X - Installs Outlook without the shell, icons, or links. This option is
	  useful for hosting controls in your own application.
	
	IMPORTANT: The /S switch is required with the Outlwzd.exe tool (without this
	switch, users will go into Web Install Mode rather than CD, and they will not
	get the correct product identification code information).
	
	Also, if you use Outlwzd.exe switches, you need to run Setup.exe with the /C
	switch. Within the /C switch, you can then specify switches to run with the
	Outlwzd.exe tool.
	
	Sample Scenarios:
	
	The following expression runs the third installation option:
	
	  "setup.exe /C:"outlwzd.exe /S:""#e"" /M:2"" (without the quotation marks)
	
	The following expression performs a quiet installation, with no user prompts and
	no restarting afterward:
	
	  "setup.exe /Q:A /C:"outlwzd.exe /S:""#e"" /Q /R:N" " (without the quotation
	  marks)
	
	Note that the placement of quotation marks is important, and that the path is
	surrounded with two pairs of double quotation marks. For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q193114 XCLN: How to Generate a User-Specific Profile w/IExpress and ODK
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:98
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

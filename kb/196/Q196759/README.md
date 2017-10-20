---
layout: page
title: "Q196759: WD97: All Workstations Not Using Same Preferences/Options"
permalink: /kb/196/Q196759/
---

## Q196759: WD97: All Workstations Not Using Same Preferences/Options

{% raw %}

	Article: Q196759
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Word for Windows on a server, all or some of the workstations
	may not use the option or preference settings you selected during Setup.
	Instead, these workstations may all use the same set of defaults, such as the
	default font or Most Recently Used (MRU) list on the File menu.
	
	CAUSE
	=====
	
	This problem occurs if the Normal.dot file exists in the network server program
	directory, instead of in the user directory that you specified during the
	Workstation Setup.
	
	Word (not Word Setup) creates the Normal.dot files in the server program
	directory. This occurs if the network administrator (or someone who has read,
	write, and create privileges in the Word program directory on the server) runs
	Word from the server installation before running a Workstation Setup to install
	Word on the workstation. Before you run the Workstation Setup, no references to
	the file locations exist in the Windows program directory, so when you quit Word
	the first time, it stores the Winword.opt and the Normal.dot files on the server
	in the directory where the Winword.exe program is located (the default
	location).
	
	After the Normal.dot file exists on the server, Word uses these files every time
	it starts from any workstation, even if you have run a Workstation Setup and
	created a reference that points to another Normal.dot location. This happens
	because, as Word starts, it checks for these files in the directory where the
	Winword.exe file resides. If it finds Winword.opt or Normal.dot in this
	location, it uses those files and does not read your reference file to attempt
	to find them in another location.
	
	NOTE: In some cases, it is desirable to have everyone use the same Normal.dot
	file and prevent any changes being made.
	
	Infrequently, this problem also occurs if you ran the Workstation Setup at your
	workstation while you were running Windows from a different location (that is,
	from a location other than the one specified in your network logon script).
	
	NOTE: Word Setup does not create the Normal.dot file. Word creates new versions
	of this file any time you run the program and the file is not located.
	Therefore, this is a network administration issue rather than a Word Setup
	issue.
	
	RESOLUTION
	==========
	
	Perform all three of the following steps to resolve this problem and restore
	each user's preference and option settings in Word:
	
	1. Quit all instances of Word running from the server. Rename or delete the
	  Normal.dot files in the network server directory.
	
	2. Make sure the Word program directory on the network server and all files in
	  that directory are flagged as read-only and shareable. You should not have
	  write privileges in this server directory before you perform the Workstation
	  Setup at the workstation.
	
	3. Make sure you run a Workstation installation of Word at every workstation
	  where the user has administrative rights (that is, full access to the Word
	  program directory on the server). This process references that point to the
	  correct location for your user's Normal.dot file.
	
	MORE INFORMATION
	================
	
	This section contains a description of the Normal.dot file and a discussion of
	the network installation of Word as it pertains to the problem addressed in this
	article.
	
	Normal.dot
	----------
	
	The default document template that stores macros, toolbars, menus, keystrokes,
	AutoText, and AutoCorrect entries. This file should be located in the user's
	Template directory and is created after the user makes a change to one of the
	items mentioned above. This file is not created by Setup. It is referenced in
	the Windows registry file.
	
	Overview: Network Setup of Word
	-------------------------------
	
	NOTE: This discussion assumes that you have a working knowledge of network
	operations and terminology. For network-specific information, see your network
	documentation.
	
	To install Word so it runs from a network file server, go to a workstation and
	connect to the file server. Run the administrator's installation of Word (type
	"setup /a" at the command line). When Setup prompts you for the network
	directory for the main Word program, specify a path on the file server. Setup
	copies all the program files to this location.
	
	IMPORTANT: DO NOT RUN WORD AT THIS POINT! If you do, the problems described at
	the beginning of this article may occur. Before you run Word, you must first
	perform the following two steps:
	
	1. Set the access privileges to read-only and shared for the server directories
	  in which you installed Word. Refer to your MS-DOS or network operating system
	  documentation for more information.
	
	2. Run the workstation installation of Word at each workstation. This registers
	  the Word program with your local Windows installation and creates references
	  to file locations. If you do not run a workstation installation before you
	  run Word from the network server, Word runs, but some operations do not
	  function correctly, such as the spelling checker, grammar checking, and
	  object linking and embedding (OLE ).
	
	NOTE: If you are running Windows from a network server, the first workstation
	installation of Word makes all the necessary Windows-level changes. This means
	you need all access privileges to the shared Windows program directory, and that
	directory must not be read-only.
	
	Additional query words: most-recently-used info
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q240302: PRB: MSDN Library Setup Fails on Terminal Server in Execute Mode"
permalink: kb/240/Q240302/
---

## Q240302: PRB: MSDN Library Setup Fails on Terminal Server in Execute Mode

	Article: Q240302
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Developer Network (MSDN) Library setup on Windows NT
	4.0 Terminal Server Edition or Windows 2000 with Terminal Services installed,
	the following error may appear at the end of setup:
	
	  MSDN Setup Error : CloseCollection g_ccolCollection.Save() dwError = 1
	
	When you try to launch the MSDN Library following the failed installation, the
	following error appears:
	
	  Cannot open the file: %MSDN Library path%\msdn*.col
	
	CAUSE
	=====
	
	The MSDN Library was installed in Terminal Server's Execute mode.
	
	RESOLUTION
	==========
	
	Manually clean the failed installation off of the computer. See the MORE
	INFORMAITON section for details on how to manually clean the failed installation
	off of your computer.
	
	The Terminal Server requires that you install applications in Install mode. This
	can be done by using the Add/Remove Programs application in the Control Panel.
	The Add/Remove Programs application can find and start Setup.Exe off of the MSDN
	Library Disc 1. There are many other considerations when installing the MSDN
	Library on Terminal Server.
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q240301 HOWTO: Use the MSDN Library successfully with Terminal Server
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	When the MSDN Library is installed on Terminal Server in Execute mode, no
	information is written to HHCOLREG.DAT. However, files and registry keys have
	been added to the computer and must be removed before correctly installing the
	MSDN Library. This section describes how to remove these files without effecting
	the other HTML Help collections on the computer. A quicker and easier process is
	to remove all HTML Help collections off of the computer. If you are willing to
	reinstall all HTML Help collections on the computer, see the following Microsoft
	Knowledge Base article.
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q240350 HOWTO: Manually Uninstall the MSDN Library
	
	To only remove the failed installation on Terminal Server, follow these steps.
	
	NOTE: First, remove all of the files that the failed MSDN Library installation
	placed on system.
	
	1. If the failed MSDN Library installation was the MSDN Library that shipped
	  with Visual Studio 6.0, locate and delete the following directory (this is
	  the default):
	
	  %Program Files%\Microsoft Visual Studio\MSDN98
	
	2. If the failed MSDN Library installation was a quarterly release, locate and
	  delete the installation folder using these steps:
	
	  a. Find the root folder where all MSDN Library quarterly releases are
	     installed to. The default is %Program File%\Microsoft Visual Studio\MSDN.
	
	  b. In root folder, find the directory of the failed installation and delete
	     it. For example, the July 99 MSDN Library is place in a 99jul directory.
	
	Next, use RegEdit.Exe to remove the registry entry related to this failed
	installation.
	
	1. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall
	
	2. Delete the subkey with the name of the MSDN Library you are removing.
	
	3. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\HTML Help Collections\Developer
	  Collections
	
	4. Under this key, there are a series of keys with language IDs that will differ
	  depending on what language version of the MSDN Library is installed. (For
	  Example English is 0x0409). Expand these language ID keys, and navigate
	  through all of their subkeys.
	
	5. As the subkeys are selected, look in the right-pane at the (Default) value.
	  Find the subkey that contains a (Default) value that names the version of the
	  MSDN Library you are removing. Delete that subkey.
	
	Examine the rest of the registry entries under the
	"HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\HTML Help Collections\Developer
	Collections" registry key. If there are no other versions of the MSDN Library
	listed there, the cleanup of the failed MSDN Library installation is complete.
	
	If other versions of the MSDN Library are listed under this key, more steps are
	needed to restore the computer. When the MSDN Library is accessed from other
	applications, the registry is examined to determine which MSDN Library to
	display. That MSDN Library is called the preferred collection. The following
	steps reset the preferred collection to one of the remaining MSDN Libraries on
	the system:
	
	1. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\HTML Help Collections\Developer
	  Collections
	
	2. Expand the same language ID keys, and navigate through all of their subkeys.
	
	3. In the right-pane, examine the (Default) value that contains the name of the
	  MSDN Library the key refers to. Decide which MSDN Library version you want to
	  select as the preferred collection.
	
	4. Copy that subkey name. For example, the subkey name for the July 99 MSDN
	  Library is 0x0375ccd80.
	
	5. Select language ID key above the preferred collection that you chose.
	
	6. In the right-hand pane, change the Preferred value to be the collection ID
	  that you just copied.
	
	7. Select the Developer Collections key again (the key selected in the first
	  step).
	
	8. Verify that the Language value is pointing to the Language ID key value that
	  contains your preferred collection. If not, change it. For example, if the
	  preferred collection of the MSDN Library was an English version, the Language
	  key should be set to 0x0409.
	
	At this point, you can properly install the MSDN Library using the Add/Remove
	Programs application. This is described in the RESOLUTION section of this
	article.
	
	REFERENCES
	==========
	
	For additional information, please click the article number(s) below to view the
	article(s) in the Microsoft Knowledge Base:
	
	  Q195878 PRB: MSDN Help Cannot Find msdn*.col File on Terminal Server
	
	  Q216109 HOWTO: Troubleshoot MSDN Library Run-Time/Install/Uninstall Problems
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbDSupport kbGrpDSTools 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

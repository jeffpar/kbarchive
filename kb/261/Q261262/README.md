---
layout: page
title: "Q261262: WD97: Err Msg: Not Enough Memory or Disk Space"
permalink: /kb/261/Q261262/
---

## Q261262: WD97: Err Msg: Not Enough Memory or Disk Space

	Article: Q261262
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to check the spelling or grammar in a Word document, you may
	receive the following error message:
	
	  Not enough memory or disk space to run the grammar checker.
	
	CAUSE
	=====
	
	The user profiles on the system do not have sufficient permissions to access the
	Alki Proofing Tools.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods that is appropriate
	for your situation:
	
	Method 1: Reinstall Alki Proofing Tools for Each Profile
	--------------------------------------------------------
	
	Follow these steps when you use User Profiles in Microsoft Windows 95 or
	Microsoft Windows 98:
	
	1. Insert the Alki Proofing Tools CD-ROM in your CD-ROM drive.
	
	2. Click Start, and then click Run.
	
	3. In the Run dialog box, click Browse.
	
	4. In the Browse dialog box, change the Look in box to your CD-ROM drive, and
	  then click to select Setup.exe.
	
	5. Click Open.
	
	6. In the Run dialog box, click OK.
	
	7. In the Alki Proofing Tools setup, click Remove.
	
	8. Log off from the computer, and then log back on as a user for whom you want
	  to provide Alki Proofing Tools.
	
	9. After you log on as the user, install the Alki Proofing Tools.
	
	10. Start Microsoft Word. Open a Word document, and click Spelling and Grammar
	  on the Tools menu. After you check the spelling and grammar of your Word
	  document, close the file and quit Microsoft Word.
	
	11. Log off from the computer, and log back on as a different user for whom you
	  want to provide the Alki Proofing Tools.
	
	12. Install the Alki Proofing Tools again.
	
	13. Start Microsoft Word. Open a Word document, and click Spelling and Grammar
	  on the Tools menu. After you check the spelling and grammar of your Word
	  document, close the file and quit Microsoft Word.
	
	14. Repeat steps 11-13 for each user for whom you want to provide the Alki
	  Proofing Tools.
	
	Method 2: Change the Security Permissions in the Windows Registry
	-----------------------------------------------------------------
	
	Use this method in either Microsoft Windows NT 4.0 or Microsoft Windows 2000 to
	grant permissions to each user of the computer to use the Alki Proof Tools.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Log on as a user of the Windows NT or Windows 2000 computer.
	
	2. Quit all Microsoft Windows programs.
	
	3. Install the Alki Proofing Tools.
	
	4. After the Alki Proofing Tools setup has completed successfully, click Run on
	  the Windows Start menu.
	
	5. In the Open box, type "Regedt32.exe" (without the quotation marks) and then
	  click OK.
	
	6. Find the following Windows Registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing Tools
	
	7. On the Security menu, click Permissions.
	
	8. On the Security tab, under Name, click to select the group to whom you want
	  to grant permissions to access the Alki Proofing Tools. For example, click to
	  select the Everyone group.
	
	9. Under Permissions, click to select Full Control, and then click OK.
	
	10. On the Registry menu, click Exit.
	
	MORE INFORMATION
	================
	
	For more information about the installation, uninstallation, or functionality of
	Alki Proofing Tools, please contact Alki Software.
	
	For information about how to contact Alki Software, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: spellcheck spell check spellchecker
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

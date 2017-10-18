---
layout: page
title: "Q147227: HOWTO: Adding Legal Notice on Logon for Unattended Setup"
permalink: kb/147/Q147227/
---

## Q147227: HOWTO: Adding Legal Notice on Logon for Unattended Setup

	Article: Q147227
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Adding the Legal Notice option for Unattended Setup requires modification of the
	Software Hive.
	
	MORE INFORMATION
	================
	
	From a shared copy of Windows NT on a system hard drive, expand the file,
	SOFTWARE._ to SOFTWARE. (EXPAND SOFTWARE._ SOFTWARE.). Then rename SOFTWARE._ to
	SOFTWARE.BAK.
	
	NOTE: The Windows NT version of EXPAND.EXE is required to properly expand this
	file.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. Select the HKEY_LOCAL_MACHINE window.
	
	3. Highlight the HKEY_LOCAL_MACHINE subtree.
	
	4. Select Registry from the menu.
	
	5. Select Load Hive.
	
	6. Go to the location of the file SOFTWARE that was expanded.
	
	7. When prompted for the Load Hive dialog box enter TEMP for the Key Name.
	
	8. A new HIVE should now be listed called TEMP.
	
	9. Double-click TEMP.
	
	10. To enable the Legal Caption modify the following entries:
	
	     HKEY_LOCAL_MACHINE\TEMP
	        \Microsoft
	           \Windows NT
	              \CurrentVersion
	                 \Winlogon
	
	     LegalNoticeCaption    REG_SZ
	     Range: String
	     Default:  (none)
	
	     Specifies a caption for a message to appear when the user presses
	     CTRL+ALT+DEL during logon. Add this value entry if you want to add
	     a warning to be displayed when a user attempts to log on to a Windows
	     NT system. The user cannot proceed with logging on without
	     acknowledging this message.
	
	     To specify text for the message, you must also specify a value for
	     LegalNoticeText.
	
	     LegalNoticeText    REG_SZ
	     Range: String
	     Default:  (none)
	
	     Specifies the message to appear when the user presses CTRL+ALT+DEL
	     during logon. Add this value entry if you want to add a warning to be
	     displayed when a user attempts to log on to a Windows NT system. The
	     user cannot proceed with logging on without acknowledging this
	     message.
	
	     To include a caption for the logon notice, you must also specify a
	     value for LegalNoticeCaption.
	
	11. To save the changes highlight TEMP.
	
	12. Select Registry from the menu.
	
	13. Select UnLoad Hive.
	
	14. The Hive is unload from the current session and is ready to be used for
	  installation purposes.
	
	Additional query words: prodnt 4.0 Unattended Setup
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

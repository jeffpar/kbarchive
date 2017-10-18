---
layout: page
title: "Q138454: Using NetWare Utilities Without Making a Drive Connection"
permalink: kb/138/Q138454/
---

## Q138454: Using NetWare Utilities Without Making a Drive Connection

	Article: Q138454
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use NetWare administrative utilities such as SYSCON.EXE
	without the need for a drive connection in File Manager by using a universal
	naming convention (UNC) path in the path variable.
	
	MORE INFORMATION
	================
	
	Standard drive mappings on a NetWare server usually include the PUBLIC directory
	and the Volume Root. Most administrators also map the SYSTEM directory.
	
	Using Windows NT you can do the equivalent of a Search Drive Map by adding these
	directories to the Path variable under System Environment Variables in Control
	Panel.
	
	Some of the NetWare utilities require access to the SYSTEM and PUBLIC directories
	to run. You can solve this problem by adding these directories to the path in
	the form of a UNC path. To add this path to the System Environment Variables, do
	the following:
	
	1. Run Control Panel and choose System.
	
	2. Under System Environment Variables select the Path variable.
	
	  After you select Path, the values for the variable appear in the Variable and
	  Value fields at the bottom of the System dialog box.
	
	3. In the Value field, add the UNC path names for the directories you want to
	  add to the path. Example:
	
	  %SystemRoot%;\\voyager\sys;\\voyager\sys\public;\\voyager\sys\system
	
	  Make sure each addition is separated by a semicolon. In the above example
	  VOYAGER is the name of the NetWare server.
	
	4. After adding the new entries choose Set and then OK.
	
	5. From the Command Prompt and run a NetWare utility.
	
	  If you have proper Rights on the NetWare server, the utility runs as expected.
	
	You may create an icon in Windows for utilities you use frequently:
	
	1. Run PIF Editor (PIFEDIT.EXE).
	
	2. Type the NetWare utility name in the Program Filename field, for example,
	  SYSCON.EXE.
	
	3. Type a window title in the Window Title field.
	
	4. Type optional parameters in the Optional Parameters field.
	
	5. For Startup Directory, type the UNC name. For example:
	
	  \\voyager\sys\public
	
	6. Next to Video Memory select the Text option button.
	
	7. Type memory options as required in the KB Required, KB Preferred, and KB
	  Limit fields.
	
	8. Select your preferred Display Usage and Execution options.
	
	9. Make sure to select Close Window On Exit. If this is not selected the Virtual
	  DOS Machine (VDM) remains active even after you quit the program.
	
	10. From the File menu, choose Save, type a PIF filename, choose OK, and quit
	  PIF Editor.
	
	11. In Program Manager, from the File menu choose New.
	
	12. Under New, choose Program Item.
	
	13. In the Program Item Properties dialog box, type the PIF filename from step
	  10 in the Command Line field.
	
	14. Choose Change Icon.
	
	  An information box titled Change Icon appears stating "There are no icons
	  available for the file specified."
	
	15. Choose OK and choose an Icon from the Current Icon list box. If you want to
	  see additional icons delete PROGMAN.EXE from the File Name field and type
	  MORICONS.DLL instead.
	
	  A different set of icons appears in the Current Icon list box.
	
	16. Choose OK twice.
	
	  The new icon appears in the active group in Program Manager.
	
	17. Double click the icon to test that the NetWare utility runs.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	Issue type        : kbhowto
	
	=============================================================================
	

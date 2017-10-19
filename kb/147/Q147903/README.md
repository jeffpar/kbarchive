---
layout: page
title: "Q147903: WINS Database Entries That Begin with C-"
permalink: /kb/147/Q147903/
---

## Q147903: WINS Database Entries That Begin with C-

	Article: Q147903
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may see strange WINS registrations in your WINS database in the form of:
	
	  C-2602COMPUTERNAME<20>
	
	or a variation of the above.
	
	MORE INFORMATION
	================
	
	This registration is made by the Microsoft Mail client. The registration is made
	to be able to detect when new mail has arrived for the client without having to
	check the mailbag file. This behavior can be controlled by the NetBIOS=number
	setting in the MSMAIL.INI file.
	
	A setting of 1 (the default for Windows networks) allows for NetBIOS notification
	and causes the Mail client to register the name. A setting of 0 turns off
	NetBIOS notification and the Mail client will not register the name.
	
	The NetBIOS name that is registered is a combination of the post office serial
	number and the computer name.
	
	For more information about the NetBIOS parameter, see page 55 of the MS Mail 3.5
	"Administrator's Guide."
	
	Additional query words: msmail prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

---
layout: page
title: "Q106547: Writer/Artist: Novell Network User Rights Needed"
permalink: kb/106/Q106547/
---

## Q106547: Writer/Artist: Novell Network User Rights Needed

	Article: Q106547
	Product(s): Microsoft Home Kids Products
	Version(s): 1.00 1.10 1.10a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As a network administrator, when you install Creative Writer or Fine Artist to a
	Novell network file server, you should give users the following rights:
	
	- Read on the root
	
	- Filescan on the root
	
	Alternatively, you may use the map root command on the directory where you
	install the program.
	
	By default, Creative Writer or Fine Artist searches the root for the MSKIDS
	directory or folder.
	
	If you do not map root or provide your users the correct rights, they will
	receive "can't find file" error messages when they try to run the application or
	open files.
	
	MORE INFORMATION
	================
	
	For more information on configuring Creative Writer or Fine Artist for Novell,
	consult your Novell documentation or the appropriate Windows documentation or
	online help.
	
	For Windows 3.x
	---------------
	
	Read the NETWORKS.TXT or NETWORKS.WRI file included with Windows 3.x.
	
	For Windows 95
	--------------
	
	For Windows 95, read the NETWORK.HLP file located in the Windows\Help folder.
	
	
	Additional query words: kbhowto novel net install setup access write kids win mskids artist fine mczee 1.10a wm_artist netware
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : 1.00 1.10 1.10a
	
	=============================================================================
	

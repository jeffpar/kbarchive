---
layout: page
title: "Q89169: Using Sun PC/NFS Network With Windows 3.0"
permalink: /kb/089/Q89169/
---

## Q89169: Using Sun PC/NFS Network With Windows 3.0

{% raw %}

	Article: Q89169
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses three topics regarding running Sun's PC/NFS network with
	Windows 3.0. PC/NFS is not a supported network.
	
	- Version 3.5 Is Required.
	
	- Printing on PC/NFS Network.
	
	- Using File Manager on a PC/NFS Network.
	
	MORE INFORMATION
	================
	
	Version 3.5 Is Required
	-----------------------
	
	You should use version 3.5 or later of the PC/NFS network when attempting to run
	it with Windows 3.0.
	
	
	Printing on PC/NFS Network
	--------------------------
	
	To print properly from the Sun PC/NFS Network when using Windows, do the
	following:
	
	1. Run the NSFCONF utility and modify the printers you intend to use inside
	  Windows to:
	
	  a. Print after five minutes.
	
	  b. Print in RAW mode.
	
	  Note: If you are going to print PostScript from inside Windows 3.0, the
	  NSFCONF utility should be set to PostScript mode instead of to RAW mode to
	  accept PostScript code.
	
	2. Edit the AUTOEXEC.BAT file and change the line
	
	        prt *
	
	  to:
	
	       prt -t30 *
	
	3. Instead of printing to an LPTx port, select the LPTx.OS2 port under Control
	  Panel's Printers option.
	
	For more information on printing, query on the following words in the Microsoft
	Knowledge Base:
	
	  printing and unsupported and UNIX
	
	Using File Manager on PC/NFS Network
	------------------------------------
	
	The error "System Error Network Error on Drive <letter>:", where
	<letter> is the logical drive letter C to Z, may occur when opening
	Windows 3.0 File Manager running in conjunction with a Sun PC-NFS network. The
	following solution corrects this problem in most situations.
	
	Solution
	--------
	
	Make sure that the network drives are mounted in logical order. For example, if
	you have a local drive C, then start your network drive mountings with logical
	drive D and continue from there alphabetically. In the CONFIG.SYS file, modify
	the line
	
	       DEVICE=PCNFS.SYS
	
	as follows
	
	       DEVICE=PCNFS.SYS /dn
	
	where n is a number from 1 to 8, based on the number of drives you have
	determined will be mounted. Do not include local hard drives in this number.
	Because 8 is the maximum simultaneous drive mountings supported by Sun, this
	number could be set to 8, and the amount of error messages received will be this
	number minus the number of drives actually mounted.
	
	The Sun products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a pc-nfs pcnfs
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}

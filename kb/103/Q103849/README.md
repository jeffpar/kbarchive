---
layout: page
title: "Q103849: PC Ext: Modem Scripts That Only Support 9600 Baud"
permalink: /kb/103/Q103849/
---

## Q103849: PC Ext: Modem Scripts That Only Support 9600 Baud

	Article: Q103849
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following modem scripts support 9600 baud only:
	
	Version 3.0 of Microsoft Mail for PC Networks
	---------------------------------------------
	
	  Modem                                Script
	  -------------------------------------------------------------------
	
	  Microcom AX series modems            MICROCOM.SCR
	  Telebit Trailblazer 9600bps          TELEBIT.SCR
	  Hayes V-series Ultra 9600            ULTRA96.SCR
	  U.S. Robotics - HST/Dual Standard    USRHST.SCR
	  Hayes V42 Smartmodem series          V42SERIE.SCR
	  Hayes V-series Smart 9600            VSERIES.SCR
	
	Versions 3.2 and 3.5 of Microsoft Mail for PC Networks
	------------------------------------------------------
	
	  Modem                                Script
	  -------------------------------------------------------------------
	
	  Hayes V-series Smart 9600            USVSER96.SCR
	  Hayes V-series Ultra 9600            USULTR96.SCR
	  Hayes Optima 9600 V.32               USOPTM96.SCR
	  Microcom AX Series Modems            USMRCM96.SCR
	  Motorola UDS V.3225                  USMTRL96.SCR
	  Multitech Multimodem 224E\V32        USMLTC96.SCR
	  Practical Periphals 9600SA           USPPER96.SCR
	  U.S. Robotics - HST/Dual Standard    USUSRHST.SCR
	  Generic                              USGNERIC.SCR
	
	MORE INFORMATION
	================
	
	There are two files associated with a modem script. They are located in the GLB
	subdirectory of the Mail database. Files with an .MDM extension are the
	uncompiled text versions of the script and can be modified. Files with an .SCR
	extension are the compiled scripts and should only be used on the modems those
	scripts are intended for. These scripts support up to 9600 baud.
	
	For more information on modem scripts, see Appendix E of the Microsoft Mail for
	PC Networks "Administrator's Guide."
	
	Additional query words: 3.00 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	

---
layout: page
title: "Q129236: PC Ext: Dip Switch Settings Incorrect in USRHST Modem Script"
permalink: /kb/129/Q129236/
---

## Q129236: PC Ext: Dip Switch Settings Incorrect in USRHST Modem Script

	Article: Q129236
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An External using a USR Courier HST Dual Standard with ASL modem, version 32bis
	with ASL modem, or HST with ASL modem and using version 3.2 of the USRHST script
	either: fails to initialize or connects successfully on the first call from a
	remote client or PO and then fails to answer or answers without connecting on
	subsequent calls until rebooted.
	
	CAUSE
	=====
	
	The Dip switch settings on the modem may be incorrect. The settings shown in the
	header of the version 3.2 USRHST.MDM script are reversed, and if you set them
	(or have already set them) according to the version 3.2 script, the problem will
	continue.
	
	The setup string in the initialize section of the script may (depending on the
	setting of sw's 3, 7, and 8) override the switches and allow the first call to
	succeed. However, at the end of the first call, the reset section issues an ATZ
	that resets the modem according to the dip switches, and the External ceases to
	answer calls until it is forced to re-initialize the modem.
	
	RESOLUTION
	==========
	
	In order for the version 3.2 script to work correctly, you need to set the
	switches according to the version 3.0 script:
	
	  ;       Filename: usrhst.mdm
	  ;       Date    : June 17, 1992
	  ;       Script  : Script file for USRobotics Courier HST dual standard
	                    modem
	
	  ;       Version : V3.0
	  ;
	  ;     This modem has a bank of DIP-Switches on the back. These should
	  ;  be set at the factory settings or as follows:
	  ;
	  ;                        QUAD  1  2  3  4  5  6  7  8  9  10
	  ;                OFF     XXXX  X              X  X     X   X
	  ;                ON               X  X  X  X        X
	
	Note that switches 2 and 4 are not the factory settings.
	
	The 1-10 switches are defined in the USR documentation as:
	
	Switch        Function
	-----------------------------------------------------------------------
	
	 1          OFF Normal DTR operation
	            ON  DTR always on
	 2          OFF Verbal result codes
	            ON  Numeric result codes
	 3          OFF Results suppressed
	            ON  Results enabled
	 4          OFF Command echo on
	            ON  No command echo
	 5          OFF Modem answers on first ring
	            ON  Autoanswer disabled
	 6          OFF CD on active connection
	            ON CD always on
	 7          OFF Result codes in originate and answer mode,
	            ON  Result codes in answer mode disabled
	 8          OFF Command recognition disabled
	            ON  AT command set recognition
	 9          OFF Modem hangs up on +++
	            ON  Modem does not hang up on +++
	 10         OFF ATZ loads from NV RAM
	            ON  ATZ loads factory defaults
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

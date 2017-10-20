---
layout: page
title: "Q37925: Mac DOS: Apple LocalTalk PC Network Card"
permalink: /kb/037/Q37925/
---

## Q37925: Mac DOS: Apple LocalTalk PC Network Card

{% raw %}

	Article: Q37925
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is a description of the Farallon LocalTalk PC network card.
	
	The following are the system requirements (according to the owner's guide):
	
	- IBM PC or compatible with at least 256K of RAM
	
	- Two floppy disk drives or one floppy disk drive and a hard drive
	
	- Microsoft MS-DOS or IBM PC-DOS version 3.1 or later
	
	- LocalTalk Locking Connector Kit (DB-9)
	
	The following are the default DIP switch settings for the Apple LocalTalk PC
	network card:
	
	 Switch  Desc   Default   Function
	  ------------------------------------------------------------------
	
	  1       IRQ4     Off     Selects Interrupt Request level 4. Same
	                           interrupt as serial port COM1. Switches 2
	                           and 3 must be off to select IRQ4.
	
	  2       IRQ3     On      Selects Interrupt Request level 3. Same as
	                           serial port COM2. Switches 1 and 3 must be
	                           off to select IRQ3.
	
	  3       IRQ2     Off     Selects Interrupt Request level 2. This
	                           setting must not be used on a PC/AT
	                           machine because it conflicts with the hard
	                           disk controller. Switches 1 and 2 must be
	                           off to select IRQ2.
	
	  4,6  DRQ3,DACK3  Off     DMA Request and DMA Acknowledge on DMA
	                           channel 3. Both switches must be on (and
	                           switches 5 and 7 off).
	
	  5,7  DRQ1,DACK1  On      DMA Request and DMA Acknowledge on DMA
	                           channel 1. Both switches must be on (and
	                           switches 4 and 6 off).
	
	  8    $24x/$22x   On      Selects the address range of the card. If
	                           this switch is on, the card will respond
	                           to control signals sent to addresses in
	                           the range $240 through $247. If this
	                           switch is off, the card will respond to
	                           control signals sent to addresses $220 to
	                           $227.
	
	If you change the DIP switch settings on the card to resolve any conflicts with
	other cards in your system, you must notify the AppleTalk driver ATALK of these
	changes. This is done by adding one or more parameters after the driver name
	ATALK.COM. The following table summarizes these options:
	
	  Option       Default     Other Possible Values
	  ------------------------------------------------------------------
	
	  /CARDINT=x      3               2 or 4
	  /DMA=x          1           3 (PC/AT only)
	  /ADDRESS=xxx   $24x               220
	
	MORE INFORMATION
	================
	
	The Farallon LocalTalk PC network card uses the following required AppleShare
	device drivers to run the version 2.0 or later Microsoft Mail MS- DOS client:
	
	  Driver                    Description
	  ------------------------------------------------------------------
	  LSL.COM                   Link Support Layer
	  ATALK.COM                 AppleTalk PC Protocol Stack
	  LTALK.COM or LTALKP.COM   Apple LocalTalk MLID
	  PAP_WS.COM                AppleTalk Printer Access Protocol
	  COMPAT.COM                AppleTalk Compatibility Module
	
	The Farallon LocalTalk PC network card is manufactured by Farallon Computing,
	Inc., a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	For more information concerning the Farallon LocalTalk PC network card, see the
	Farallon LocalTalk PC network card owner's manual or call Farallon support at
	(415) 596-5000.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN300DOS kbMailATN310DOS
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}

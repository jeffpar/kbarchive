---
layout: page
title: "Q113481: ISDN Support for Windows for Workgroups RAS"
permalink: kb/113/Q113481/
---

## Q113481: ISDN Support for Windows for Workgroups RAS

	Article: Q113481
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article provides general information about setting up the Remote
	Access Services (RAS) client in Microsoft Windows for Workgroups 3.11 with an
	integrated services digital network (ISDN) configuration. This article should be
	used as a supplement to the documentation provided with the ISDN. Contact your
	ISDN provider to obtain information on the proper settings for specific ISDN
	cards.
	
	MORE INFORMATION
	================
	
	The ISDN configuration offers a much faster communication speed than standard
	telephone lines because it replaces the analog telephone system with a digital
	system. For example, a standard telephone line can typically transfer data with
	a modem at a speed of 9600 bits per second (bps); ISDN communicates without a
	modem at speeds of 64 or 128 kilobits per second. As with a local area network,
	you can connect to an ISDN system from a remote location using RAS, provided
	that the proper ISDN lines, service, and adapters are in place.
	
	Below are the steps required to configure ISDN parameters in Windows for
	Workgroups 3.11 RAS:
	
	1. Choose the Remote Access Services icon and choose Add from the Phone Book
	  toolbar.
	
	2. In the Phone Book Entry dialog box, choose Advanced and then select the Any
	  ISDN Port option as the PORT setting.
	
	3. Choose the ISDN icon to configure ISDN settings.
	
	4. Select an appropriate Line Type setting for the ISDN connection. The Line
	  Type options are 64K Digital (highest quality), 56K Digital, and 56K Voice
	  (lowest quality). Contact the ISDN provider for details on the Line Type
	  selection.
	
	5. Both the Negotiate Line Type and Enable Hardware Compression options are
	  selected by default.
	
	  Negotiate Line Type allows RAS to communicate at the selected line type but
	  negotiates to a lower quality line type if necessary. This negotiation
	  depends on the condition of the ISDN line (for example, noise on the line
	  affects negotiation).
	
	  Below are examples of when Negotiate Line Type option may be disabled:
	
	   - The ISDN tariff rates and the capability of the ISDN line have been
	     previously set up to support a specific line type.
	
	   - The ISDN system supports only Voice grade lines in the area. Choose the
	     56K Voice option as the line type.
	
	   - Negotiate line type is unnecessary if 64K Digital connection is supported
	     in the your area and is selected as the line type in RAS.
	
	  NOTES:
	
	   - Do not disable Negotiate Line Type if channel negotiation is needed.
	     Channel negotiation is automatically enabled when the Negotiate Line Type
	     option is selected. If you disable the Negotiate Line Type option, RAS
	     cannot operate when channel negotiation is needed.
	
	     You must use channel negotiation if you connect to an ISDN system that has
	     two or more ISDN lines and has been set up to use channel negotiation. If
	     you enable the RAS software portion of channel negotiation and do not have
	     the ISDN card in the hardware-selected channel negotiation mode, your
	     system may stop responding (hang), or you may be unable to communicate
	     with RAS on the ISDN lines. (RAS will not know how to format the data for
	     transmission and will also have problems communicating with the hardware.)
	     Contact your ISDN provider to find out if your card supports channel
	     negotiation.
	
	   - The Enable Hardware Compression option uses the ISDN card's built-in
	     compression techniques to compress data before transmitting it. To use the
	     card's hardware compression, RAS software compression must first be turned
	     off. To turn off RAS software compression, choose Options from the Phone
	     Book toolbar and select Disable Software Compression.
	
	6. The Channels To Use setting is set to 1 by default. The number of channels
	  set should not be changed unless the ISDN card supports the use of more than
	  one ISDN channel.
	
	   - If your ISDN card supports the use of more than one ISDN channel (known as
	     channel aggregation) and the card is set up accordingly, you can increase
	     the number of channels in use to improve throughput. If more than one
	     channel is selected, you must enter each telephone number for the number
	     of channels selected (separated by colons, not spaces). For example, if
	     three channels are selected, the Phone Number entry might read as
	     follows:
	
	  555-5555:444-4444:333-3333
	
	   - Not all ISDN drivers let you restrict channel aggregation. If your
	     computer is configured to receive calls and you have a non- restricting
	     driver, ensure that remote clients specify only one or two channels. This
	     prevents one user with several ISDN cards from monopolizing all the
	     channels on the server.
	
	The online help file available in Remote Access Services is a valuable resource
	for configuring RAS with an ISDN configuration. Online help provides information
	on how to set up RAS with ISDN and details many of the supported configurations
	for an ISDN system.
	
	Additional query words: 3.11 ISDN
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

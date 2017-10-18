---
layout: page
title: "Q130481: CMD Technology PCI-0640x IDE Controller Requires New Driver"
permalink: kb/130/Q130481/
---

## Q130481: CMD Technology PCI-0640x IDE Controller Requires New Driver

	Article: Q130481
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers that use CMD Technology's PCI0640x IDE controller chip to control
	devices on both IDE channels may stop responding (hang) or experience data loss
	when running Windows NT 3.5 or 3.51 without CMD Technology's Windows NT 3.5
	driver. This problem does not occur on computers with only one IDE channel.
	
	The CMD PCI-0640x IDE controller chip set can be identified on the motherboard by
	looking for a LSI chip that has the CMD logo and labeled PCI- 0640x x=A,B,... It
	is near the connectors used to attach the IDE drives.
	
	The following computers contain this chip:
	
	  AMI Atlas PCI
	  AST Bravo MS-T P/75
	  Asus tek 90mhz
	  AT&T Globalyst 360, 380, 620, and 630
	  Dell Optiplex 90
	  Dell Optiplex XMT 5120
	  Digital (DEC) Starion 700i
	  DEC (Digital) Venturis 466
	  HP vectra VL series 3
	  Micron P5-90
	  Micron P5-100
	  NEC Image P90
	
	
	RESOLUTION
	==========
	
	Substitute CMD Technology's Windows NT 3.5 driver for the Enhanced IDE driver
	supplied with Windows NT. CMD's Windows NT 3.5 driver may be downloaded from CMD
	Technology's bulletin board system. The BBS number is (714) 454-1134. Look for
	the file 640XNT35.ZIP. Users also may obtain the driver from their reseller.
	
	Microsoft has modified the Windows NT version 3.51 file, ATAPI.SYS, to correct
	this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. A fix to this problem for version 3.51 is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	The product discussed here is manufactured by CMD Technology, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	the product's performance or reliability.
	
	Additional query words: atapi prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

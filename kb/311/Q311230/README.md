---
layout: page
title: "Q311230: PRB: Font Height Doesn't Change with a Printer Definition Table"
permalink: kb/311/Q311230/
---

## Q311230: PRB: Font Height Doesn't Change with a Printer Definition Table

	Article: Q311230
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Printer Control Language (PCL) codes in a Printer Definition Table
	(PDT) to change font point sizes, this may have no effect on the height of
	characters in the printed output of a PCL emulation printer.
	
	CAUSE
	=====
	
	When you use the Primary Height control character sequence in a PDT to set the
	parameters of your printed output, this procedure will work only with certain
	fonts. This is because the height or point size of characters in a PCL
	environment are handled in two different manners, depending upon whether the
	font is a proportional font (such as Arial) or a fixed pitch font (such as
	Courier). These fonts are also referred to as scalable and bitmapped,
	respectively.
	
	RESOLUTION
	==========
	
	You can set the height of a proportional font by using the Primary Height
	control string. You can manipulate the height of a fixed pitch font by changing
	the horizontal pitch: the more characters per inch, the shorter the characters.
	
	The following is the command sequence to configure the Primary Height setting:
	
	  1B 28 73 # 56
	
	The # character is a hexadecimal representation of an ASCII value, meaning that
	point size 12 is represented by "31 32."
	
	The default for fixed pitch fonts is 8.5 points; the default for proportional
	fonts is 12 points.
	
	MORE INFORMATION
	================
	
	When you select fonts and point sizes, be aware that fonts have a distinct set
	of parameters that must be set in a sequential or hierarchical manner. A font is
	described by the Symbol Set, Spacing, Height, Pitch, Style, Stroke Weight,
	Typeface, and Orientation parameters. For example, if you choose a particular
	font whose characteristics do not fit in the default symbol set, the default
	font or another font will be used.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q311271 Font Selection in a PDT
	
	For more information about this issue, see the Hewlett Packard PCL5 Comparison
	Guide, PCL5 Printer Language Technical Reference Manual.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

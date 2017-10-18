---
layout: page
title: "Q264635: Code Page 932 Translation of Roman Numerals Is Not as Expected"
permalink: kb/264/Q264635/
---

## Q264635: Code Page 932 Translation of Roman Numerals Is Not as Expected

	Article: Q264635
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),3.0 Japanese,4.0
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The default Snadbc.tbl file in SNA Server translates the range 0x8754-0x875D
	into 0xFE, which prints as a period.
	
	CAUSE
	=====
	
	The code page 932 has two ranges for Roman numerals, 0x8754-0x875D and
	0xFA4A-0xFA53. The conversion table for both the TrnsDT API and SNA National
	Language Support (SNANLS) uses the range 0xFA4A-0xFA53. (TrnsDT and SNANLS are
	the character conversion APIs.)
	
	RESOLUTION
	==========
	
	The Japanese version of SNA Server includes four alternate conversion tables,
	Snadbc.m78, M83, I90, and M90. The Snadbc.m83 table maps Roman numerals to the
	0x8754-0x875D range, which allows the expected translation.
	
	MORE INFORMATION
	================
	
	For additional information regarding DBCS conversion, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q214649 How To Program EBCDIC - ASCII Conversion Using The NLS API
	
	Additional information on DBCS conversion can also be found in the SNA Server
	SDK.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),3.0 Japanese,4.0
	
	=============================================================================
	

---
layout: page
title: "Q165345: SCS Codes Ignored When Bypassing GDI"
permalink: /kb/165/Q165345/
---

## Q165345: SCS Codes Ignored When Bypassing GDI

	Article: Q165345
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When data for a LU1 print session contains both printer control characters and
	SCS codes, the SNA Server Print Service will drop the SCS codes if Bypass GDI is
	selected.
	
	Because the job is prerendered by the host (contains the native control codes for
	a specific printer) it is appropriate, in this case, to select Bypass GDI in the
	Printer Properties dialog box.
	
	The following is a sample incoming 3270 data stream:
	
	DLC   -----------------------------------------------------------
	DLC   04160000->01020101 DLC DATA
	DLC                      DAF:69 OAF:01 ODAI:off Normal
	DLC                      RQE FMD BC DR1
	DLC
	DLC   ---- Header  at address 014247F4, 3 elements ----
	DLC   02021400 17002C00 69010002 01002A02     <......,.i.....*.>
	DLC
	DLC   ---- Element at address 019258D0, start 10, end 268 ----
	DLC   02900015 27C52750 93F28150 93F19650     <....'E'Pl2aPl1oP>
	DLC   93F0A950 93F0A450 93F48550 93F58327     <l0zPl0uPl4ePl5c'>
	DLC   5081F1F3 D3152750 93F0A250 93F19627     <Pa13L.'Pl0sPl1o'>
	DLC   4DF1F1A4 274DA2F0 97F1F64B F6F788F8     <M11u'Ms0p16K67h8>
	DLC   4BF5A5F0 A2F082F0 E30D0C0D 40C3E3C4     <K5v0s0b0T...@CTD>
	DLC   D7D9D6C7 D4404040 40404040 40404040     <PROGM@@@@@@@@@@@>
	DLC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	DLC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	DLC   40404040 404040C3 C4D3E815 40C3E3C4     <@@@@@@@CDLY.@CTD>
	
	                             ^^ SCS code for NewLine
	
	DLC   D7D9C9D5 E340C2D9 F1F8F640 404040C3     <PRINT@BR186@@@@C>
	DLC   E4F1F8F6 40404040 D9E37BF0 F1F6F2F9     <U186@@@@RT{01629>
	DLC   40404040 40F0F1F8 F6404040 40404040     <@@@@@0186@@@@@@@>
	DLC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	DLC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	DLC   40404040 40400000 00000000 00000000     <@@@@@@..........>
	
	The following is the printer output file:
	
	1B 25 2D 31 32 33 34 35-58 40 50 4A 4C 20 53 45  *.%-12345X@PJL SE*
	54 20 50 41 47 45 50 52-4F 54 45 43 54 3D 4F 46  *T PAGEPROTECT=OF*
	46 0A 40 50 4A 4C 20 53-45 54 20 44 45 4E 53 49  *F.@PJL SET DENSI*
	54 59 3D 33 0A 40 50 4A-4C 20 53 45 54 20 52 45  *TY=3.@PJL SET RE*
	54 3D 4F 46 46 0A 40 50-4A 4C 20 53 45 54 20 52  *T=OFF.@PJL SET R*
	45 53 4F 4C 55 54 49 4F-4E 3D 36 30 30 0A 40 50  *ESOLUTION=600.@P*
	4A 4C 20 45 4E 54 45 52-20 4C 41 4E 47 55 41 47  *JL ENTER LANGUAG*
	45 3D 50 43 4C 0A 0D 1B-45 1B 2A 74 36 30 30 52  *E=PCL...E.*t600R*
	1B 26 75 31 32 30 30 44-1B 2A 72 30 46 1B 26 6C  *.&u1200D.*r0F.&l*
	30 4F 1B 26 6C 30 53 1B-26 6C 30 48 1B 26 6C 32  *0O.&l0S.&l0H.&l2*
	61 38 63 31 45 1B 2A 70-30 78 30 59 1B 2A 63 30  *a8c1E.*p0x0Y.*c0*
	74 35 37 36 30 78 37 37-30 34 59 1B 26 6C 31 58  *t5760x7704Y.&l1X*
	1B 2A 62 30 4D 0D 1B 45-1B 26 6C 32 61 26 6C 31  *.*b0M..E.&l2a&l1*
	6F 26 6C 30 7A 26 6C 30-75 26 6C 34 65 26 6C 35  *o&l0z&l0u&l4e&l5*
	63 1B 26 61 31 33 4C 1B-26 6C 30 73 26 6C 31 6F  *c.&a13L.&l0s&l1o*
	1B 28 31 31 75 1B 28 73-30 70 31 36 2E 36 37 68  *.(11u.(s0p16.67h*
	38 2E 35 76 30 73 30 62-30 54 0C 1B 2A 62 30 4D  *8.5v0s0b0T..*b0M*
	0D 20 43 54 44 50 52 4F-47 4D 20 20 20 20 20 20  *. CTDPROGM      *
	20 20 20 20 20 20 20 20-20 20 20 20 20 20 20 20  *                *
	20 20 20 20 20 20 20 20-20 20 20 20 20 20 20 20  *                *
	20 20 20 20 20 20 20 20-20 20 20 20 43 44 4C 59  *            CDLY*
	20 43 54 44 50 52 49 4E-54 20 42 52 31 38 36 20  * CTDPRINT BR186 *
	
	^^ This should be a CRLF here, but instead the SCS '15' is dropped.
	
	20 20 20 43 55 31 38 36-20 20 20 20 52 54 23 30  *   CU186    RT#0*
	31 36 32 39 20 20 20 20-20 30 31 38 36 20 20 20  *1629     0186   *
	20 20 20 20 20 20 20 20-20 20 20 20 20 20 20 20  *                *
	
	RESOLUTION
	==========
	
	When printer control characters such as PCL or Postscript data are mixed with
	SCS codes, a PDT file must be compiled from a PDF file that maps the GDI calls
	to printer control. For instance, if EBCDIC '0x15' (SCS code for New Line) is
	part of the incoming data stream, the following PDF file excerpt would translate
	the GDI call New_Line to a Carriage Return (OD) / Line Feed (OA) combination:
	
	  */***********************
	  */ BEGINNING OF PDF FILE
	  */***********************
	  Control Code section of the PDF file:
	
	  NEW_LINE = CRR LFF                    /* new line
	  */ 
	
	  Macro Definition Section of the PDF file:
	
	  LFF              EQU 0A               /* line feed
	  */ 
	  CRR              EQU 0D               /* carriage return
	  */ 
	  */***********************
	  */ END OF PDF FILE
	  */***********************
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

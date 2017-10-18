---
layout: page
title: "Q165440: Shared Folders Gateway Only Shows Root Directory"
permalink: kb/165/Q165440/
---

## Q165440: Shared Folders Gateway Only Shows Root Directory

	Article: Q165440
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the drive assigned to a shared folder is viewed in File Manager or Windows
	Explorer, only the root directory is shown. This was originally reported on the
	120-day evaluation version of SNA Server 3.0, but may occur on the retail
	version as well.
	
	The Browse feature of the Shared Folders Gateway properties page will
	successfully display all of the folders.
	
	CAUSE
	=====
	
	Snanls.dll was not installed unless the SNA Server Print Service was also
	installed. Snanls.dll does EBCDIC to ASCII translation. Here is the sample
	failing trace showing a folder name query to be "aoooooooo.ooo" ('.' is
	incorrectly translated a 'K' in SNA Server trace):
	
	|000000ba.0000004c DLC    ----------------------------------------------
	14:40:06.79
	|000000ba.0000004c DLC    01020101->06160000 DLC DATA
	|000000ba.0000004c DLC                       DAF:02 OAF:01 ODAI:off Normal
	|000000ba.0000004c DLC                       RQE FMD BC EC DR1 CD
	|000000ba.0000004c DLC
	|000000ba.0000004c DLC    ---- Header  at address 014A43B0, 1 elements ----
	|000000ba.0000004c DLC    07050004 00002C00 02010006 0100B700
	<......,.........>
	|000000ba.0000004c DLC
	|000000ba.0000004c DLC    ---- Element at address 0199C11C, start 10, end
	92 ----
	|000000ba.0000004c DLC    03902000 50D00101 00004A10 09001111     <..
	.P.....J.....>
	|000000ba.0000004c DLC    0E616F6F 6F6F6F6F 6F6F4B6F 6F6F0006
	<.aooooooooKooo..>
	|000000ba.0000004c DLC    11FB0001 00061116 00400005 1133F100
	<.........@...31.>
	|000000ba.0000004c DLC    051132F1 00141102 113A112B 11661194
	<..21.....:.+.f.m>
	|000000ba.0000004c DLC    11321133 110E1110 00051101 00000611
	<.2.3............>
	|000000ba.0000004c DLC    10002A                                  <..*
	>
	
	Here is an example of the successful case showing the query for the folder name
	being "/????????.???". In this case Snanls.dll was copied to the
	<Snaroot>\System directory:
	
	DLC   ---------------------------------------------------------------------
	-----------
	DLC   01020101->04160000 DLC DATA
	DLC                      DAF:01 OAF:01 ODAI:off Normal
	DLC                      RQE FMD BC EC DR1 PI CD
	DLC
	DLC   ---- Header  at address 014242E0, 1 elements ----
	DLC   0705B006 00002C00 01010008 0100AA00     <......,.........>
	DLC
	DLC   ---- Element at address 0191C11C, start 10, end 92 ----
	DLC   03912000 50D00101 00004A10 09001111     <.j .P.....J.....>
	DLC   0E2F3F3F 3F3F3F3F 3F3F2E3F 3F3F0006     <./????????.???..>
	DLC   11FB0001 00061116 00400005 1133F100     <.........@...31.>
	DLC   051132F1 00141102 113A112B 11661194     <..21.....:.+.f.m>
	DLC   11321133 110E1110 00051101 00000611     <.2.3............>
	DLC   10002A                                  <..*             >
	
	NOTE: The Browse button in the Shared Folders Property page will retrieve the
	folder names because the EBCDIC to ASCII translation is done internally in that
	particular component. It does not rely on Snanls.dll.
	
	RESOLUTION
	==========
	
	To work around the problem, install the Print Server feature.
	
	The final resolution has two parts:
	
	- Setup was modified to always install Snanls.dll.
	
	  -and-
	
	- Shared folders gateway now reports an error if the call to SNANLS fails.
	
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
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

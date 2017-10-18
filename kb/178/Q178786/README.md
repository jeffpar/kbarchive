---
layout: page
title: "Q178786: PCMAIL: GFEXTEND 1 2 Required for Extended Characters Using GCAS"
permalink: kb/178/Q178786/
---

## Q178786: PCMAIL: GFEXTEND 1 2 Required for Extended Characters Using GCAS

	Article: Q178786
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To support fax transmissions that include extended characters (the IBM Extended
	Character Set) using the Microsoft Mail Gateway to Fax version 3.0 configured
	with a supported GammaLINK GammaFAX card using the GCAS CAS driver, version
	1.0.2, the string
	
	  GFEXTEND 1 2
	
	will need to be added to the GammaFAX configuration file called, Gfax.$dc.
	
	MORE INFORMATION
	================
	
	This string forces the GammaFAX software to properly acknowledge extended
	characters, (the IBM Extended Character Set) that can be included as part of a
	fax transmission and needs to be appended to the Gfax.$dc file.
	
	Gfax.$dc is generated during the installation of GammaLINK GammaFAX fax card
	software. It will be located in the local GammaFAX installation directory of the
	hosting workstation and will need to be modified to appear like the example
	below:
	
	     GFAX.$DC
	     --------
	
	     CHASSIS 1
	     BUFFERS 2
	     NUMCHAN 1
	     CHANNEL 1 0 GFAX1.1
	     COUNTRY 1 1
	     INIT 1
	     LOAD 1  c:\gammafax\gfxcp.bin
	     CSID 1 [user's phone #]
	     GFXSHUTDOWN 1 0
	     POLLT 0 275
	     CONTROLT 60
	     QUEUET 45
	     UPDATET 300
	     GFEXTEND 1 2
	
	Completing this change will allow vertical border lines to appear correctly in
	the distribution template box that normally appears at the bottom of the cover
	page of a received FAX. Otherwise, border lines appear as control codes, such as
	^M.
	
	For additional information regarding the usage of GFEXTEND and the command
	switches that modify its operation, please refer to the GammaLINK GammaFAX CPi
	Reference Manual that comes with the fax card.
	
	Additional query words: 3.00 FAX
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

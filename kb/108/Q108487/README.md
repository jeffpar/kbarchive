---
layout: page
title: "Q108487: MS2000&#36; Trap D on OS/2 2.1 Workstation"
permalink: /kb/108/Q108487/
---

## Q108487: MS2000&#36; Trap D on OS/2 2.1 Workstation

	Article: Q108487
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	The Microsoft LAN Manager NE2000 driver MS2000.OS2 dated 6/23/93 causes a Trap d
	when booting on an OS/2 2.1 workstation.
	
	WORKAROUND
	==========
	
	Currently the only workaround is to change network interface cards or use OS/2
	2.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LAN Manager NE2000 driver
	MS2000.OS2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Exception in device driver: MS2000$
	TRAP 000D ERRACD=0008 ERRAC=**** ERLIM=********
	EAX=0000000 EBX=7BCC0828 EXC=0001-860 EDX=00000008
	ESI=3BDC021E EDI=FCA90174 EBP=00004CC0 FLG=00013206
	
	CS:ELP=0820:0000051A CSACC=0096 CSLIM=00002854
	SS:ESP=0030:00004CBA SSAC=1097 SSLIM=00003FFF
	DS=0818 DSACC=0093 DSLIM=000021AC CR0=FFFFFFFB
	ES=0818 ESALL=0093 ESLIM=000021AC CR2=1A055354
	FS=0000 FASALL=**** FSLIM=********
	GS=0000 GSALL=**** GSLIM=********
	
	The system detected an internal processing error at location
	##0160:fff5fbd5-000d:9bd5
	038600d1
	
	Internal revision 6.514, 93/04/12
	The System stopped.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

---
layout: page
title: "Q167682: Application Exceptions When Opening a SNA Server 2.11 COM.CFG"
permalink: kb/167/Q167682/
---

## Q167682: Application Exceptions When Opening a SNA Server 2.11 COM.CFG

	Article: Q167682
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNA Server 3.0 system may generate an application exception in an SNA Server
	module when you try to open an SNA Server 2.11 configuration file.
	
	This only occurs if the SNA Server 2.11 configuration contains duplicate LU
	numbers on a particular connection for a 3270 LU and a dependent LU 6.2 LU.
	
	This problem has been observed to cause application exceptions in the SnaBase
	service and in SNA Server Manager (Snaexp.exe).
	
	CAUSE
	=====
	
	When SNA Server opens a configuration file (Com.cfg), it does two checks on 3270
	LUs. The first check ensures that the LU number is unique among all 3270 LUs on
	a connection. The second check is used to look for LU number conflicts between
	3270 LUs and dependent APPC LUs configured on a server. If either of these fail,
	the LU record is destroyed and an error variable set.
	
	The application exception occurs because the second check is being performed
	without regard to the error code being returned by the first check. This results
	in a destroyed LU record being passed to the test routine, causing the
	application exception.
	
	RESOLUTION
	==========
	
	SNA Server has been updated to prevent it from performing the second check on
	3270 LUs if the first check returns an error code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When this problem occurs, a Drwtsn32.log containing information similar to the
	following will be generated in the Windows NT directory:
	
	  Application exception occurred:
	       App: exe\snabase.DBG (pid=<process id>)
	       When: <date> @ <time>
	       Exception number: c0000005 (access violation)
	
	  function: ConflictingLocalLuNumbers
	     6120bf4e 53               push    ebx
	     6120bf4f 56               push    esi
	     6120bf50 57               push    edi
	     6120bf51 8b7c2414         mov     edi,[esp+0x14]
	  ss:031de38f=????????
	     6120bf55 55               push    ebp
	     6120bf56 50               push    eax
	     6120bf57 57               push    edi
	     6120bf58 66bd0100         mov     bp,0x1
	     6120bf5c e85f1b0000       call    GetAddr (6120dac0)
	     6120bf61 8bd8             mov     ebx,eax
	  FAULT ->6120bf63 8b406c           mov     eax,[eax+0x6c]
	  ds:01beea06=????????
	     6120bf66 50               push    eax
	     6120bf67 e874f0ffff       call    GetGrpCount (6120afe0)
	     6120bf6c 6689442412       mov     [esp+0x12],ax
	  ss:031de390=????
	     6120bf71 663bc5           cmp     ax,bp
	     6120bf74 7244             jb      ConflictingLocalLuNumbers+0x7a
	  (6120bfba)
	     6120bf76 668b74241c       mov     si,[esp+0x1c]
	  ss:031de390=????
	     6120bf7b 55               push    ebp
	     6120bf7c 8b436c           mov     eax,[ebx+0x6c]
	  ds:01beea06=????????
	     6120bf7f 50               push    eax
	     6120bf80 e88bf0ffff       call    GetGrpNthItem (6120b010)
	     6120bf85 50               push    eax
	
	Additional query words: upgrade trap
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

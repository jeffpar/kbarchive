---
layout: page
title: "Q157006: XCLN: Access Violation when Opening New Message"
permalink: kb/157/Q157006/
---

## Q157006: XCLN: Access Violation when Opening New Message

	Article: Q157006
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a Microsoft Exchange message with an attachment, an
	access violation will occur if the icon associated with the attachment has an
	icon title longer than 260 characters.
	
	
	MORE INFORMATION
	================
	
	When you look at the Drwtsn32.log, it should show an entry similar to the
	following:
	
	  Application exception occurred:
	  App: exchng32.DBG (pid=107)
	  When: 10/14/1996 @ 15:44:40.623
	  Exception number: c0000005 (access violation)
	
	If you look at the thread id that shows a FAULT, you will see the following:
	
	  State Dump for Thread Id 0x120
	
	  eax=0012ee10 ebx=00422620 ecx=0012ee10 edx=00000001 esi=00000000
	  edi=0012ee10
	  eip=77fa555d esp=0012ede0 ebp=0012f220 iopl=0 nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000     efl=00000246
	
	  function: wcscpy
	          77fa5551 8b442404         mov     eax,[esp+0x4]
	          77fa5555 56               push    esi
	          77fa5556 8b74240c         mov     esi,[esp+0xc]
	          77fa555a 57               push    edi
	          77fa555b 8bf8             mov     edi,eax
	  FAULT ->77fa555d 668b0e           mov     cx,[esi]
	          77fa5560 8bd7             mov     edx,edi
	          77fa5562 66890a           mov     [edx],cx
	          77fa5565 83c702           add     edi,0x2
	          77fa5568 83c602           add     esi,0x2
	          77fa556b 6685c9           test    cx,cx
	          77fa556e 75ed             jnz     wcscpy+0xc (77fa555d)
	          77fa5570 5f               pop     edi
	          77fa5571 5e               pop     esi
	          77fa5572 c3               ret
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0012ede4 77f25e44 0012ee10 00000000 6c18064c 0012ee10 ntdll!wcscpy (FPO:
	  [2,0,2])
	  0012edf0 6c18064c 0012ee10 00000000 6c5458e3 0012ee10 kernel32!lstrcpyW
	  (FPO: [2,0,0])
	  0012edfc 6c5458e3 0012ee10 00000000 00000000 0015de08
	   mapi32!MNLS_lstrcpyW
	  [omap]  (FPO: [1,0,0])
	  0012f220 6c546801 00000000 00000000 00422560 00396328
	  wmsui32!OleMetafilePictFromIconAndLabelA [omap]
	  0012f238 6c546ae7 003963c0 00000000 00000000 00396374
	  wmsui32!HmfpLoadRenderData [omap]
	  0012f260 6c546c67 00422560 6c5262c0 00000000 0012f358
	  wmsui32!ScLoadFromPatt [omap]
	  0012f284 19e1d086 00396374 003962e8 00e126ac 19e73cd1
	  wmsui32!FILEPERSTG_Load [omap]
	  00e10002 eeff0000 1002eeff 00000000 fe000000 00000000
	  ole32!wCreateObject
	  [omap]
	
	CAUSE
	=====
	
	The Microsoft Exchange client converts the icon title from a double-byte
	character set (DBCS) string to a unicode string using an internal memory buffer.
	This buffer is limited to 260 characters. An assumption was made that icon
	titles would never exceed this limit. When an icon title exceeds 260, the
	conversion process fails, returning a NULL to the Microsoft Exchange client. The
	Microsoft Exchange client provides this NULL pointer to a copy command that
	fails with an access violation.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

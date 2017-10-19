---
layout: page
title: "Q318901: Application Exception in Explorer.exe When You Use OLE DB for DB"
permalink: /kb/318/Q318901/
---

## Q318901: Application Exception in Explorer.exe When You Use OLE DB for DB

	Article: Q318901
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you configure Dr. Watson as the default debugger, the following application
	exception may occur when you create or edit the Universal Data Link (UDL) file
	for the Microsoft OLE DB Provider for DB2 on Microsoft Windows XP.
	
	Application exception occurred:
	       App: C:\WINDOWS\Explorer.EXE(pid=2692)
	       When: 2/22/2002 @ 12:11:24.386
	       Exception number: c0000005 (access violation)
	
	*----> State Dump for Thread Id 0x25c <----*
	
	eax=0000000d ebx=0000000d ecx=00000000 edx=00000000 esi=00082ed8 edi=000004e4
	eip=77e78692 esp=02ddefd0 ebp=02ddefe0 iopl=0         nv up ei pl zr na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000             efl=00000246
	
	function: kernel32!GetFileSizeEx
	       77e7867d 4d               dec     ebp
	       77e7867e e889088b4d       call    c5728f0c
	       77e78683 ec               in      al,dx
	       77e78684 894804           mov     [eax+0x4],ecx
	       77e78687 33c0             xor     eax,eax
	       77e78689 40               inc     eax
	       77e7868a c9               leave
	       77e7868b c20800           ret     0x8
	       77e7868e 8bc1             mov     eax,ecx
	       77e78690 33c9             xor     ecx,ecx
	FAULT ->77e78692 663908           cmp     [eax],cx              ds:0023:0000000d=????
	       77e78695 56               push    esi
	       77e78696 8bf0             mov     esi,eax
	       77e78698 7473             jz      kernel32!GetFileSizeEx+0xb7 (77e7870d)
	       77e7869a 6a02             push    0x2
	       77e7869c 5a               pop     edx
	       77e7869d 03c2             add     eax,edx
	       77e7869f 663908           cmp     [eax],cx
	       77e786a2 7469             jz      kernel32!GetFileSizeEx+0xb7 (77e7870d)
	       77e786a4 03c2             add     eax,edx
	       77e786a6 663908           cmp     [eax],cx
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	1. To create a UDL file, right-click an empty space on the desktop, click New,
	  and then click Text Document.
	
	2. Rename the file Test.udl.
	
	3. Right-click the file, and then click Properties.
	
	4. Click the Provider tab, and then click Microsoft OLE DB Provider for DB2.
	
	5. Click the Connection tab. Note that although you clicked the Connection tab,
	  the properties for the Security tab are displayed instead.
	
	6. Click the Connection tab again; the exception violation occurs.
	
	
	kbcrossref
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

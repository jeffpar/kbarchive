---
layout: page
title: "Q234602: FIX: /Og Generates Bad Code for a Compare/Branch"
permalink: /kb/234/Q234602/
---

## Q234602: FIX: /Og Generates Bad Code for a Compare/Branch

{% raw %}

	Article: Q234602
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbVC600QFE kbDSupport kbGrpDSVCCompiler kbVS600sp4fix kbVS600sp5fi
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the /Og compiler switch for a compare/branch that targets another
	compare/branch such as the following:
	
	  if (!count--) return 0;
	  if (!count) return 1;
	
	The code generated for the second statement above may be incorrectly removed by
	the compiler.
	
	CAUSE
	=====
	
	This is caused by a bug in C2.dll.
	
	RESOLUTION
	==========
	
	1. As a workaround, the problem can be avoided by modifying the code so that
	  post-decrement is performed after the first compare/branch, such as:
	
	  if (!count) return 0;
	  count--;
	  if (!count) return 1;
	
	  The correct code is generated even with /Og optimization.
	
	2. Alternatively, a supported fix for Visual C++ 6.0 that corrects this problem
	  is now available from Microsoft, but it has not been fully regression tested
	  and should be applied only to systems experiencing this specific problem.
	
	  To resolve this problem immediately, contact Microsoft Product Support
	  Services to obtain the fix. For a complete list of Microsoft Product Support
	  Services phone numbers and information on support costs, please go to the
	  following address on the World Wide Web:
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	  (http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS)
	
	  The English version of this fix should have the following file attributes or
	  later:
	
	  +---------------------------------------------------------------+
	  | Name   | Size  | Date    | Time     | Version#     | Platform | 
	  +---------------------------------------------------------------+
	  | c2.dll | 721KB | 6/18/99 | 10:14 PM | 12.00.8534.0 | x86      | 
	  +---------------------------------------------------------------+
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM) and you need this fix, please
	call the Pay Per Incident number listed on the above Web site. If you contact
	Microsoft to obtain this fix, a fee may be charged. This fee is refundable if it
	is determined that you only require the fix you requested. However, this fee is
	non-refundable if you request additional technical support, if your no-charge
	technical support period has expired, or if you are not eligible for standard
	no-charge technical support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	The sample code below can be used to reproduce the problem.
	
	  int main(int count)
	  {
	      do 
	      {
	          if (count > 10) return -1;
	
	          /* start - code snippet */ 
	
	          if (!count--) return 0;
	          /* Missing instructions for the below statement with /Og */ 
	          if (!count) return 1;
	
	          /* end - code snippet */ 
	
	      } while (1);
	  }
	
	When compiled with /Og, the following incorrect assembly instructions are
	generated:
	
	  ; 7    : 		/* start - code snippet */ 
	  ; 8    : 
	  ; 9    : 		if (!count--) return 0;
	
	    0000b	8b c8		 mov	 ecx, eax
	    0000d	48		 dec	 eax
	    0000e	85 c9		 test	 ecx, ecx
	    00010	74 0a		 je	 SHORT $L44
	
	  ; 3    : 	do 
	  ; 4    : 	{
	  ; 5    : 		if (count > 10) return -1;
	
	    00012	83 f8 0a	 cmp	 eax, 10			; 0000000aH
	    00015	7e f4		 jle	 SHORT $L33
	  $L43:
	    00017	83 c8 ff	 or	 eax, -1
	
	  ; 10   : 		/* Missing instructions for the below statement with /Og */ 
	  ; 11   : 		if (!count) return 1;
	  ; 12   : 
	  ; 13   : 		/* end - code snippet */<BR/>
	
	The assembly instruction for line eleven above is incorrectly removed in the
	above optimized code.
	
	The instructions generated with /Od are given as follows:
	
	  ; 7    : 		/* start - code snippet */ 
	  ; 8    : 
	  ; 9    : 		if (!count--) return 0;
	
	    0000e	8b 45 08	 mov	 eax, DWORD PTR _count$[ebp]
	    00011	8b 4d 08	 mov	 ecx, DWORD PTR _count$[ebp]
	    00014	83 e9 01	 sub	 ecx, 1
	    00017	89 4d 08	 mov	 DWORD PTR _count$[ebp], ecx
	    0001a	85 c0		 test	 eax, eax
	    0001c	75 04		 jne	 SHORT $L37
	    0001e	33 c0		 xor	 eax, eax
	    00020	eb 16		 jmp	 SHORT $L35
	  $L37:
	
	  ; 10   : 		/* Missing instructions for the below statement with /Og */ 
	  ; 11   : 		if (!count) return 1;
	
	    00022	83 7d 08 00	 cmp	 DWORD PTR _count$[ebp], 0
	    00026	75 07		 jne	 SHORT $L38
	    00028	b8 01 00 00 00	 mov	 eax, 1
	    0002d	eb 09		 jmp	 SHORT $L35
	  $L38:
	
	  ; 12   : 
	  ; 13   : 		/* end - code snippet */ 
	
	The assembly instructions for line eleven above is not removed, which is the
	correct behavior.
	
	By using resolution one (workaround) of moving post-decrement to a separate
	statement, the correct code is generated even with /Og optimization, as show
	here:
	
	  ; 7    : 		/* start - code snippet */ 
	  ; 8    : 
	  ; 9    : 		if (!count) return 0;
	
	    0000b	85 c0		 test	 eax, eax
	    0000d	74 0d		 je	 SHORT $L44
	
	  ; 10   : 		count--;  /* workaround */ 
	
	    0000f	48		 dec	 eax
	
	  ; 11   : 		/* No missing instructions for the below statement with /Og */ 
	  ; 12   : 		if (!count) return 1;
	
	    00010	74 0e		 je	 SHORT $L45
	
	  ; 3    : 	do 
	  ; 4    : 	{
	  ; 5    : 		if (count > 10) return -1;
	
	    00012	83 f8 0a	 cmp	 eax, 10			; 0000000aH
	    00015	7e f4		 jle	 SHORT $L33
	  $L43:
	    00017	83 c8 ff	 or	 eax, -1
	
	  ; 13   : 
	  ; 14   : 		/* end - code snippet */ 
	
	By using resolution two (fix) of the fixed C2.dll, the correct code is generated
	with /Og optimization, as shown here:
	
	  ; 7    : 		/* start - code snippet */ 
	  ; 8    : 
	  ; 9    : 		if (!count--) return 0;
	
	    0000b	8b c8		 mov	 ecx, eax
	    0000d	48		 dec	 eax
	    0000e	85 c9		 test	 ecx, ecx
	    00010	74 0e		 je	 SHORT $L44
	
	  ; 10   : 		/* No missing instructions for the below statement with /Og */ 
	  ; 11   : 		if (!count) return 1;
	
	    00012	85 c0		 test	 eax, eax
	    00014	74 0e		 je	 SHORT $L45
	
	  ; 3    : 	do 
	  ; 4    : 	{
	  ; 5    : 		if (count > 10) return -1;
	
	    00016	83 f8 0a	 cmp	 eax, 10			; 0000000aH
	    00019	7e f0		 jle	 SHORT $L33
	  $L43:
	    0001b	83 c8 ff	 or	 eax, -1
	
	  ; 12   : 
	  ; 13   : 		/* end - code snippet */ 
	
	Additional query words: sp4 /Og assembly code removed
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbVC600QFE kbDSupport kbGrpDSVCCompiler kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

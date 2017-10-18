---
layout: page
title: "Q315839: SNABASE.exe Access Violation on HIS 2000 End User Client"
permalink: kb/315/Q315839/
---

## Q315839: SNABASE.exe Access Violation on HIS 2000 End User Client

	Article: Q315839
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Host Integration Server (HIS) 2000 End User Client experiences an access
	violation in SNABASE.exe. If DRWTSN32.exe is configured as the default debugger
	on the system that is running the HIS 2000 End User Client, information similar
	to the following will appear in the Drwtsn32.log file after the access violation
	occurs:
	
	Application exception occurred:
	       App: snabase.exe (pid=2996)
	       When: 12/12/2001 @ 16:25:25.087
	       Exception number: c0000005 (access violation)
	
	[data omitted]
	
	function: LsaApCallPackage
	       782d7e49 5e               pop     esi
	       782d7e4a 5b               pop     ebx
	       782d7e4b c20800           ret     0x8
	       782d7e4e 8b36             mov     esi,[esi]              ds:0008b7d0=00000000
	       782d7e50 ebcf             jmp    LsaApCallPackagePassthrough+0xd7b (782dd221)
	       782d7e52 53               push    ebx
	       782d7e53 ff1558102d78                                    ds:782d1058=77f95402
	                                 call    dword ptr [Ordinal19+0x1058 (782d1058)]
	       782d7e59 8b4e04           mov     ecx,[esi+0x4]          ds:008a8da2=????????
	       782d7e5c 8b06             mov     eax,[esi]              ds:0008b7d0=00000000
	       782d7e5e 8901             mov     [ecx],eax              ds:782eac48=00000000
	FAULT ->782d7e60 894804           mov     [eax+0x4],ecx          ds:0081d5d2=????????
	       782d7e63 ff0cbdc0ac2e78   dec dword ptr [782eacc0+edi*4] ds:0000000f=????????
	       782d7e6a 8d04bdc0ac2e78   lea     eax,[782eacc0+edi*4]   ds:0000000f=????????
	       782d7e71 ebcc             jmp    LsaApCallPackagePassthrough+0xd99 (782dd23f)
	       782d7e73 53               push    ebx
	       782d7e74 ff155c102d78                                    ds:782d105c=77f880d2
	                                 call    dword ptr [Ordinal19+0x105c (782d105c)]
	       782d7e7a 33c0             xor     eax,eax
	       782d7e7c ebca             jmp   LsaApCallPackagePassthrough+0x10a2 (782dd548)
	       782d7e7e 56               push    esi
	       782d7e7f 8b742408         mov     esi,[esp+0x8]          ss:0153d44b=????????
	       782d7e83 57               push    edi
	       782d7e84 33ff             xor     edi,edi
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	00D1FED0 64505DE8 000865EC 00084D60 602012D0 00D1FF4C msv1_0!LsaApCallPackage 
	77BEC1D0 77BE84EF 77BE8655 77BE80E2 77BE3C18 00000000 snacip!<nosymbols> 
	00000001 00000000 00000000 00000000 00000000 00000000 secur32!EnumerateSecurityPackagesA 
	
	CAUSE
	=====
	
	A small timing window exists in the HIS 2000 End User Client transport dynamic
	link libraries (DLLs) that may allow two threads to close and reset the security
	context handles simultaneously when SNABASE.exe closes its sponsor connection.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+----------------------------------+
	| File name  | Date        | Time  | 
	+----------------------------------+
	| Snacip.dll | 07-Jan-2002 | 10:22 | 
	+----------------------------------+
	| Snacnw.dll | 07-Jan-2002 | 10:22 | 
	+----------------------------------+
	| Snaclm.dll | 07-Jan-2002 | 10:22 | 
	+----------------------------------+
	| Snacbv.dll | 07-Jan-2002 | 10:22 | 
	+----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	This problem can only occur if the HIS 2000 End User Client is configured to
	"Locate servers using a Subdomain". The problem does not occur if the HIS 2000
	End User Client is configured to "Locate servers using Active Directory".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

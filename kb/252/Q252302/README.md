---
layout: page
title: "Q252302: IIS Stops Responding at W3SVC!CGIThread"
permalink: /kb/252/Q252302/
---

## Q252302: IIS Stops Responding at W3SVC!CGIThread

{% raw %}

	Article: Q252302
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Internet Information Server (IIS) is running a certain CGI program, IIS may
	stop responding at W3SVC!CGIThread. The call stack looks similar to the
	following:
	
	  eax=ffffffff ebx=0120b408 ecx=3ffff638 edx=ffffffff esi=00f50000
	  edi=00f4ffb0
	  eip=68c08be8 esp=00f4d688 ebp=00f4e1bc iopl=0 nv up ei pl nz ac po cy
	  cs=001b ss=0023 ds=0023 es=0023 fs=003b gs=0000 efl=00010217
	  W3SVC!CGIThread+0x24a:
	  68c08be8 f3a5 rep movsd ds:00f50000=???????? es:00f4ffb0=0010c87c
	  ChildEBP RetAddr Args to Child
	  00f4e1bc 4c5f544e 54474e45 00303d48 45544147 W3SVC!CGIThread+0x24a(FPO:
	  [Non-Fpo]
	  45544e4f 000003e6 00000000 00000000 00000000 0x4c5f544e [Stdcall: 20]
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  1999/10/02 06:11   4.2.725.1    229024  W3svc.dll     x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

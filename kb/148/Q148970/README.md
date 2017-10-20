---
layout: page
title: "Q148970: How to Configure SNA Service TPs in the Registry"
permalink: /kb/148/Q148970/
---

## Q148970: How to Configure SNA Service TPs in the Registry

{% raw %}

	Article: Q148970
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Chapter 2 of the Microsoft SNA Server 2.0, 2.1, and 2.11 APPC and CPIC [ASCII
	147]Programmer[ASCII 146]s Guide[ASCII 148] describes the configuration entries
	necessary to define a transaction program (TP) to SNA Server. The first eight
	characters of the TP name are configured as the Microsoft Windows NT or
	Microsoft Windows 95 service key name in the registry for 32-bit Windows
	applications, in the [SnaServerAutoTPs] section in Win.ini file for Microsoft
	Windows 3.x applications or SNA.INI for OS/2 applications.
	
	However, SNA "service" TP names have two to four characters names where the first
	character starts with an EBCDIC hexadecimal number from X'00' to X'3F'. Because
	the names cannot be converted into a valid registry service key name or Win.ini
	or Sna.ini file entry, SNA Server maps the following values onto the name to
	represent this first non-printable character as follows:
	
	  0x07 - "DDM"
	  0x20 - "DIA"
	  0x21 - "SNAD"
	  0x24 - "FS"
	  0x30 - "PO"
	
	All others are prefixed by "UN" for unknown.
	
	For example, the AS/400 communications TP name supporting 5250 display emulation
	is called X'30F0F0F5'. To define this name in the registry (for Windows NT or
	Windows 95 clients), in the Win.ini file (for Windows 3.x clients), or the
	Sna.ini file (for OS/2 clients), the TP name should be configured as:
	
	  PO005
	
	where "PO" represents X'30', 'X'F0 converts to the number "0" and 'X'F5 converts
	to the number "5".
	
	CAUSE
	=====
	
	The above information is included at the end of Chapter 2 of the SNA Server APPC
	and CPIC "Programmer's Guide", though the documentation only mentions support
	for Windows 3.x and OS/2 clients, when in fact it applies to Windows NT and
	Windows 95 as well.
	
	WORKAROUND
	==========
	
	The configuration requirements for service TPs is provided in this article. This
	information will be included a future version of the APPC and CPIC "Programmer's
	Guide."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11 Service Pack 1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsna sp1 service pack 1 8 2-4
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

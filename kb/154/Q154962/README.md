---
layout: page
title: "Q154962: IIS FTP Server Does Not Use Continuation Character Correctly"
permalink: kb/154/Q154962/
---

## Q154962: IIS FTP Server Does Not Use Continuation Character Correctly

	Article: Q154962
	Product(s): Internet Information Server
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The FTP service in Internet Information Server versions 1.0 and 2.0 with
	directory annotation enabled uses a space for a continuation character in a
	multi-line response rather than a minus sign (-) as per RFC 959.
	
	Notice the correct behavior below with the Microsoft Windows NT FTP Server. The
	230 line is followed immediately by the continuation character (-):
	
	230------------------------------------------------------------------------
	
	and here with the IIS FTP Server it is incorrect
	
	230 -----------------------------------------------------------------------
	
	This can create problems for auto connecting ftp clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server versions 1.0 and 2.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	According to J. Postel & J. Reynolds, RFC 959 - File Transfer Protocol
	(1985), page 35:
	
	  "Thus the format for multi-line replies is that the first line will begin
	  with the exact required reply code, followed immediately by a Hyphen, "-"
	  (also known as Minus), followed by text. The last line will begin with the
	  same code, followed immediately by Space <SP>, optionally some text,
	  and the Telnet end-of-line code."
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis200 kbiis100
	Version           : :1.0,2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

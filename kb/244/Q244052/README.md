---
layout: page
title: "Q244052: AFP (Advanced Function Printing) Is Not Supported by SNA Server"
permalink: /kb/244/Q244052/
---

## Q244052: AFP (Advanced Function Printing) Is Not Supported by SNA Server

{% raw %}

	Article: Q244052
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AFP (also known as Advanced Format Printing and Advanced Function Presentation)
	is not supported by SNA Server. This form of the data stream, IPDS (Intelligent
	Printer Data Stream), requires the installation of a third-party product in
	addition to SNA Server.
	
	The following links list some of the products from the online SNA Resource Guide
	related to AFP:
	
	  http://www.microsoft.com/SNA/Showcase/Resource_guide/RG16-17.asp
	  http://www.microsoft.com/SNA/Showcase/Resource_guide/RG30.asp
	  http://www.microsoft.com/SNA/Showcase/Resource_guide/RG15.asp
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	AFP is a set of rules and conventions created by IBM. These rules and
	conventions govern various data types, such as text, font, image, graphics, bar
	codes color, multimedia, and so on. IBM developed specific document architecture
	to accommodate these data types. MO:DCA-P (Mixed Object Document Content
	Architecture-Presentation) is this specification. This architecture supports the
	storage and interchange of such data types on such platforms as IBM Mainframes,
	AS/400 systems, RISC System/6000 and OS/2 for printing to IBM impact, laser, PCL
	supported and PostScript supported print devices and print queues.
	
	For further information on AFP, contact IBM or click the following link:
	
	  http://www.printers.ibm.com/R5PSC.NSF/Web/afpm
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

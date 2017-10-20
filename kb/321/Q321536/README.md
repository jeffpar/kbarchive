---
layout: page
title: "Q321536: FIX: Applications Using OLE DB Provider for VSAM Stop Responding"
permalink: /kb/321/Q321536/
---

## Q321536: FIX: Applications Using OLE DB Provider for VSAM Stop Responding

{% raw %}

	Article: Q321536
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	User developed applications that use COM+ components that call in to the OLE DB
	Provider for AS/400 and VSAM may experience problems that cause the application
	to appear as though it has stopped responding.
	
	When you use the OLE DB Provider for AS/400 and VSAM, communication between the
	application and the Host system may stop responding, and any new applications
	that call in to the provider may also stop responding.
	
	Through investigation, it was determined that if an application makes two
	simultaneous calls in to the provider, lock contention occurs that results in
	the observed failure.
	
	CAUSE
	=====
	
	This problem is the result of incorrect resource locking order used within the
	provider source code.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server 4.0 service pack that contains this fix.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date         Time   File name
	  ---------------------------------
	  17-Jan-2002  01:07  Ddmserv.exe
	  17-Jan-2002  01:07  Ddmapi.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM) and you need this fix, please
	call the Pay Per Incident number listed on the above Web site. If you contact
	Microsoft to obtain this fix, and if it is determined that you only require the
	fix you requested, no fee will be charged. However, if you request additional
	technical support, and if your no-charge technical support period has expired,
	or if you are not eligible for standard no-charge technical support, you may be
	charged a non-refundable fee.
	
	For more information about eligibility for no-charge technical support, see the
	following article in the Microsoft Knowledge Base:
	
	  Q154871 Determining If You Are Eligible for No-Charge Technical Support
	
	WORKAROUND
	==========
	
	It is possible to work around this problem by implementing in the application
	code a global mutex to make sure that applications do not call in to the
	provider at the same time from two different threads.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server4.0 Service Pack 4.
	
	
	Additional query words: VSAM OLEDB hang
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

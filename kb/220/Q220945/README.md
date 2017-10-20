---
layout: page
title: "Q220945: Undocumented COMTI Methods Are Exposed"
permalink: /kb/220/Q220945/
---

## Q220945: Undocumented COMTI Methods Are Exposed

{% raw %}

	Article: Q220945
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a COM Transaction Integrator (COMTI) component has been successfully
	registered with Microsoft Transaction Server (MTS), you can see two additional
	interface methods when you view the COMTI object methods within the MTS
	adminstration tool. The two methods are ServerPid() and LastSM(). These methods
	are not intended to be used by developers and are unsupported.
	
	MORE INFORMATION
	================
	
	The Interface Definition Language (IDL) infomation below depicts the built-in
	properties that are inherited for all COMTI objects.
	
	  / 
	  [id(0x7fffffff), propget, hidden]
	  long ServerPID();
	
	  [id(0x7ffffffe), propget, hidden]
	  long LastSM();
	
	  [id(0x7ffffffd), propget, helpstring("Current status of the remote environment")]
	  BSTR REStatus();
	
	  [id(0x7ffffffc), propget, helpstring("Build a new Recordset object")]
	  IDispatch *NewRecordset(BSTR name);
	
	  //[id(0x7ffffffb), propget, helpstring("Explicit selection of the remote RE")]
	  //BSTR CurrentRE();
	
	  [id(0x7ffffffb), propput]
	  void SelectionHint(BSTR rhs);
	
	  //[id(0x7ffffffa), propget, helpstring("Collection of compatible REs")]
	  //IUnknown *RECollection();
	
	The two undocumented functions have an associated "hidden" attribute and should
	not be displayed in most object browsers. However, certain object browsers may
	disregard the attribute and display the properties anyway.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

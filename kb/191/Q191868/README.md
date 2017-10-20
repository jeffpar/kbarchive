---
layout: page
title: "Q191868: Runtime Error 1205; CedarBank VBClient in DCOM Environment"
permalink: /kb/191/Q191868/
---

## Q191868: Runtime Error 1205; CedarBank VBClient in DCOM Environment

{% raw %}

	Article: Q191868
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error occurs when executing the getaccts method of the COM Transaction
	Integrator for CICS and IMS (COMTI) CedarBank tutorial in a DCOM environment.
	This error involves the Visual Basic client components of the tutorial (VBClient
	and VBClientExplicitSecurity) in an identical manner.
	
	CedarBank has two methods, cedrbank and getaccts. Both methods execute properly
	when CedarBank.exe is operated on the same computer on which COMTI and
	Transaction Server (MTS) operate. However, when the MTS component package is
	exported to another computer and CedarBank is executed on that other computer,
	one method, cedrbank, executes properly, but COMTI returns the following runtime
	error when the getaccts method is attempted:
	
	  (1205) COM Transaction Integrator detected an error on parameter 2 prior to
	  the remote operation. COM Transaction Integrator could not convert from
	  variant type (0x0009) to (0x0008) (0x80020005).
	
	This message can also be seen in the application event log of the computer
	running COMTI.
	
	CAUSE
	=====
	
	There is an error in the source code for the CedarBank Visual Basic client
	programs. It doesn't make any difference when the client code, COMTI runtime,
	and MTS all coexist on the same computer. When the client is exported to another
	computer, however, parameter data must be marshaled between the two by DCOM, and
	data of one of the getaccts parameters, the PIN, is not marshaled correctly,
	producing the runtime error.
	
	WORKAROUND
	==========
	
	To resolve this problem, install the SNA Server service pack described in the
	STATUS section below, or perform the following workaround:
	
	The following statement in the source for the VBClient and
	VBClientExplicitSecurity must be changed and the program recompiled.
	
	In the Private Sub GetAccounts_Click() subroutine, change:
	
	        Set objAccounts = objBank.getaccts(txtName.Text, txtPIN)
	
	to:
	
	        Set objAccounts = objBank.getaccts(txtName.Text, txtPIN.Text)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0 included with SNA Server version 4.0.
	This problem has been corrected in the latest U.S. service pack for SNA Server
	version 4.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q239849: Type Mismatch Error Occurs When UDT Is a COMTI Return Value"
permalink: /kb/239/Q239849/
---

## Q239849: Type Mismatch Error Occurs When UDT Is a COMTI Return Value

{% raw %}

	Article: Q239849
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic client invokes a method of a COM Transaction Integrator for CICS
	and IMS (COMTI) component library, which declares a user-defined type (UDT) as a
	return value for the method. Visual Basic responds with a "type mismatch" error
	and the code does not compile. This only happens when the COMTI component is
	early bound. The UDT is defined in the Visual Basic code by referencing its
	declaration in the component library. Under the same circumstances, if late
	binding is used, the code compiles and executes correctly. In this case, the
	compiler has no knowledge of the component and a type mismatch can not occur.
	
	CAUSE
	=====
	
	The COMTI Component Builder (CB) declares the return value as a UDT pointer. The
	Visual Basic statement that invokes the COMTI method specifies the return value
	as a UDT, which is why there is a type mismatch.
	
	
	WORKAROUND
	==========
	
	To work around this issue, make the UDT an [output] parameter instead of a
	return value, or use late binding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, SP2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q249281: COMTI May Generate 1507 Error When Converting COMP-3 Data Type"
permalink: /kb/249/Q249281/
---

## Q249281: COMTI May Generate 1507 Error When Converting COMP-3 Data Type

{% raw %}

	Article: Q249281
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a COM Transaction Integrator for CICS and IMS (COMTI) method contains an
	input parameter that is defined as a float or double Automation data type and is
	assigned the maximum possible numeric value for the data type, COMTI may
	generate a 1507 exception error if the Error Handling option is set to Rounded
	in Component Builder (CB) for the data type. Additionally, if the parameter is
	returned from the host, COMTI may generate a 1564 exception error when it
	attempts to process or convert the arriving data. For example, a COBOL data type
	of PIC 9(3)V9(8) with an Automation input mapping of double causes the following
	Windows NT event to occur if a value of 999.999999999 is assigned to the
	variable and the 'Rounded' option is set in CB:
	
	  (1507) The magnitude of the sending field exceeds the output field for
	  parameter Parameter1 in method Method1.
	
	The size of the number in the parameter is too large to be placed into the
	resulting data type. Check for a client application error and correct. If the
	client application is correct consider modifying the data conversion mapping so
	that the parameter is converted to a data type capable of accepting the numeric
	value.
	
	If the PIC 9(3)V9(8) field is returned from the host program with a value of
	999.99999999, then the following error message is posted:
	
	  (1564) An error occurred when attempting to acquire the allow variable length
	  property for parameter Parameter1 in method Method1.
	
	The COM Transaction Integrator runtime is unable to correctly read the COM
	Transaction Integrator-created component library. Try to open the component
	library with the COM Transaction Integrator Component Builder on the runtime
	computer. If you cannot open the component library, rebuild it, or attempt to
	acquire a new copy from the original source and re-deploy it. If you can open
	the component library with the COM Transaction Integrator, try shutting down MTS
	Server processes, and then remove the component library from the MTS package and
	re-deploy it.
	
	CAUSE
	=====
	
	COMTI does not handle the conversion of float or double data types when the
	maximum numeric value is used.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Product Name service pack that contains this fix.
	
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
	
	+------------------------------------+
	| File name       | Date     | Time  | 
	+------------------------------------+
	| Convertprim.dll | xx/xx/xx | xx:xx | 
	+------------------------------------+
	
	NOTE: Date and time information will be provided as soon as it becomes
	available.
	
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0SP1, 4.0SP2, and 4.0SP3.
	
	MORE INFORMATION
	================
	
	One of the primary features of COMTI is the ability to convert and format a
	method's parameters from the representation understandable by the Windows NT
	platform into the representation understandable by a mainframe transaction
	program (TP). The conversion is defined at design time and implemented at run
	time. At design time, the developer uses CB to associate or map an Automation
	data type with a COBOL data type. COMTI provides default mappings between
	standard Automation data types and COBOL data types, and the developer can
	either accept the default mappings or override the default with other mappings
	supported by COMTI. The mappings are recorded by CB in the COMTI component
	library (typelib). When a developer uses the Floating Point Binary data type,
	the likelihood of a data conversion precision problem increases if fractions are
	involved. COMTI's CB offers the following three options to handle data precision
	errors:
	
	   - Round (default)
	
	- Truncate
	
	- Error
	
	When you define a COBOL data type of PIC 9(N)v9(N)COMP-3 (or DISPLAY), the
	default value presented in CB is of type Double and the precision error handler
	is set to Round. Under these circumstances, if the maximum value for the
	parameter is used, whether you are sending or receiving data, COMTI generates an
	error.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbCOMTI100SP1 kbCOMTI400SP2 kbCOMTI400SP3 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}

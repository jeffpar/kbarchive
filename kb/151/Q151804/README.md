---
layout: page
title: "Q151804: PRB: Dynamic Creation of Redistributable Control Fails"
permalink: kb/151/Q151804/
---

## Q151804: PRB: Dynamic Creation of Redistributable Control Fails

	Article: Q151804
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrl kbLicensing kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMF
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to dynamically create an instance of one of the redistributable
	ActiveX controls supplied with Visual C++ fails on machines where Visual C++ has
	not been installed. However, creating an instance of the same control on a
	dialog box succeeds.
	
	CAUSE
	=====
	
	The redistributable controls supplied with Visual C++ are licensed.
	
	RESOLUTION
	==========
	
	Specify a valid License string when dynamically creating the control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When Visual C++ is installed on a machine, the entire machine becomes licensed
	to use the redistributable ActiveX controls as part of the installation process.
	If an instance of one of the redistributable controls is created dynamically and
	no License key is specified, the creation will succeed because the control is
	able to determine that the entire machine is licensed and so will allow itself
	to be created. However, if the same code that performs the dynamic creation of
	the control is executed on a machine that has not had Visual C++ installed on it
	(such as Visual Basic or another application that provides the same control),
	the creation will fail. In this case the control will not allow itself to be
	created if a License key is not specified and the machine has not been
	licensed.
	
	The CWnd::CreateControl method can be used to dynamically create an instance of
	an ActiveX control. When an ActiveX control is inserted into a Visual C++
	project via the Component Gallery, a wrapper class is created that can be used
	to work with the control. The wrapper class provides two overridden versions of
	the Create method. One of the versions allows a string to be passed that will be
	used as the License key when creating the control; the other version does not.
	
	Dynamic creation of one of the redistributable ActiveX controls will fail on a
	machine that has not had Visual C++ installed on it if any of the following
	methods are used to create the control:
	
	- The version of the Create method in the wrapper class that does not allow a
	  License key to be specified is used.
	
	- A NULL string is passed to the Create method in the wrapper class that does
	  accept a License key.
	
	- The CWnd::CreateControl method is called with a value of NULL for the License
	  key string.
	
	- IClassFactory::CreateInstanceLic is used with a NULL value as the License key
	  parameter.
	
	Creating instances of the redistributable ActiveX controls via a dialog box
	template will succeed on a machine that has not had Visual C++ installed. This
	behavior occurs because the Visual C++ resource editor asks the control for its
	License key when the dialog template is created. The License key is then cached
	as a DLGINIT resource in the project's .RC file. At run time, when the MFC
	dialog box code creates the dialog and its contained controls, the License key
	is read from the dialog resource and used in the call to
	IClassFactory2::CreateInstanceLic to create the control.
	
	To allow a licensed control to be dynamically created on a machine that is not
	licensed requires passing a License key. An application that performs dynamic
	creation of a control must have the control's License key cached in its own
	code. This must be done while the application is being designed. For sample code
	illustrating how to request a License key from an object, refer to the following
	article in the Microsoft Knowledge Base:
	
	  Q151771 SAMPLE: LicReqst Shows Requesting a License Key from an Object
	
	The following redistributable controls supplied with Visual C++ 6.0 are licensed
	and require a license key to be dynamically created on machines that have not
	had Visual C++ installed:
	
	  
	  +----------------------------------------+
	  | Control File | Description             | 
	  +----------------------------------------+
	  | anibtn32.ocx | Animated button Control | 
	  +----------------------------------------+
	  | keysta32.ocx | Key Status Control      | 
	  +----------------------------------------+
	  | mci32.ocx    | Multimedia MCI Control  | 
	  +----------------------------------------+
	  | mscomm32.ocx | Communications Control  | 
	  +----------------------------------------+
	  | msflxgrd.ocx | Flex Grid Control       | 
	  +----------------------------------------+
	  | msmask32.ocx | Masked Edit             | 
	  +----------------------------------------+
	  | grid32.ocx   | Grid Control            | 
	  +----------------------------------------+
	  | picclp32.ocx | Picture Clip Control    | 
	  +----------------------------------------+
	  | tabctl32.ocx | Tab Control             | 
	  +----------------------------------------+
	
	REFERENCES
	==========
	
	For more information, please see:
	
	The Visual C++ documentation on the CWnd::CreateControl method.
	
	The Visual C++ documentation on licensing an OLE control.
	
	The Visual C++ documentation on using controls in a non-dialog container.
	
	The OLE Programmer's Reference documentation on the IClassFactory2 interface.
	
	Additional query words: ocx cdk vc5rel
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrl kbLicensing kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

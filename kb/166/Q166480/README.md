---
layout: page
title: "Q166480: INFO: Active Template Library (ATL) Frequently Asked Questions"
permalink: /kb/166/Q166480/
---

## Q166480: INFO: Active Template Library (ATL) Frequently Asked Questions

	Article: Q166480
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): kbATL200 kbATL210 kbVC500 kbVC600 kbATL300 kbFAQ MSGRAPH kbGrpDSMFCATLkbfaq
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	This document contains answers to Frequently Asked Questions (FAQ) about the
	Active Template Library (ATL) versions 2.0 and 2.1. Here is a list of the
	questions that are answered:
	
	Questions on ATL 2.0 Setup
	--------------------------
	
	1. What are the known problems with the ATL 2.0 Object Wizard? (3/5/97)
	
	Questions on ATL controls
	-------------------------
	
	1. Why is the put_Font or putref_Font method not called when an ActiveX
	  control's Font property is changed by the ActiveX Control Pad? (3/5/97)
	
	2. How do I get the <PARAM> tag to work with an ATL control? (3/5/97)
	
	3. What DLLs do I need to ship with my control? (3/12/97)
	
	4. What changes does a control need to run in the Visual Basic 5.0 Control
	  Creation Edition? (3/12/97)
	
	5. What changes does a control need to run in an MFC 4.2b container? (3/12/97)
	
	6. Why do I get exceptions when debugging my control? What do they mean?
	  (3/12/97)
	
	7. Why doesn't the container use my connection point interface? (4/2/97)
	
	Questions on DLLs
	-----------------
	
	1. What are the reasons an ATL server might fail to register? (3/5/97)
	
	2. What problems might be encountered when using _ATL_MIN_CRT? What causes the
	  linker error that _main is unresolved during Release builds? (3/5/97)
	
	3. What are the known problems with the ATL 2.0 Object Wizard? (3/5/97)
	
	4. What DLLs do I need to ship with my control? (3/12/97)
	
	Questions on registration
	-------------------------
	
	1. What are the reasons an ATL server might fail to register? (3/5/97)
	
	2. How do I update the CLSID registry key under a version-independent ProgID?
	  (3/5/97)
	
	MORE INFORMATION
	================
	
	Q. Why is the put_Font or putref_Font method not called when an ActiveX
	control's Font property is changed by the ActiveX Control Pad?
	
	The following also applies to ATL 3.0:
	
	A. The put_Font or putref_Font method is called only when you completely replace
	your control's Font object with a new one. When you change the font in the
	ActiveX Control Pad, get_Font is called to get a pointer to the Font object for
	the ActiveX Control Pad. Changes made by the Control Pad are made directly to
	that object. The ActiveX Control Pad does not create a new Font object and
	assign it to your Font property.
	
	The following example demonstrates the case where the font property is changed
	without calling the put_Font or putref_Font method:
	
	     <object CLASSID="clsid:E882D673-878E-11D0-B00C-000000000000"
	      id="FontTest1">
	     </object>
	     <object CLASSID="clsid:E882D673-878E-11D0-B00C-000000000000"
	      id="FontTest2">
	     </object>
	     <SCRIPT LANGUAGE="VBScript">
	     <!--
	     Sub Window_OnLoad
	
	     FontTest1.Font.Name = "times new roman"
	     FontTest1.Font.Size = 16
	     FontTest2.Font = FontTest1.Font
	
	     End Sub
	     -->
	     </SCRIPT>
	
	---------------------------------------------------------------------------
	
	Q. How do I get the <PARAM> tag to work with an ATL control?
	
	The following also applies to ATL 3.0:
	
	A. You need to support the IPersistPropertyBag interface for the HTML
	<PARAM> tag to work with your ATL control. An implementation of this
	interface is supplied in the IPersistPropertyBagImpl class that comes with ATL
	2.1. The CIRC sample demonstrates how to support IPersistPropertyBag and add
	your properties to the property map.
	
	---------------------------------------------------------------------------
	
	Q. What are the reasons an ATL server might fail to register?
	
	The following also applies to ATL 3.0:
	
	A. The following are the top three reasons an ATL server might fail to register:
	
	1. You built your project with _WIN32_WINNT=0x400 (the default), and you are not
	  running the ATL server under Windows NT 4.0 or you do not have an up-to-date
	  version of Oleaut32.dll. To solve this problem, run "DUMPBIN /EXPORTS
	  OLEAUT32.DLL" and search for UnregisterTypelib. If it is not there, then your
	  server cannot run. Remove this #define statement from Stdafx.h if you want to
	  run the ATL server under Windows 95 or older versions of Windows NT.
	  Alternatively, you can use LoadLibrary and GetProcAddress so that you can run
	  optimally under both Windows 95 and Windows NT 4.0. The Oleaut32.dll that
	  ships with the Internet Explorer 3.x is up-to-date.
	
	2. You built your project as MinSize and Atl.dll is not properly installed on
	  the system. The correct version of Atl.dll must be copied and registered by
	  Regsvr32. There are Windows NT and Windows 95 versions of Atl.dll. The
	  Windows 95 version runs under Windows NT. However, since it does not use the
	  UNICODE APIs, it is slightly less efficient. Unless you build your project as
	  MinDependency, you will need to install the correct version of Atl.dll and
	  run Regsvr32 on it before you install your server.
	
	3. You built your project as UNICODE, and you cannot run it under Windows 95.
	
	The following are the steps to troubleshoot:
	
	1. For a DLL server, run Regsvr32 in the debugger. Open the Project Settings
	  dialog box and click the Debug tab. In the Executable for debug session text
	  box, enter the full path to Regsvr32.exe, such as
	  C:\Sharedide\Bin\Regsvr32.exe. In the Program arguments text box, specify the
	  full path to your DLL, such as C:\Myprojects\MyFolder\Debug\MyFile.dll. Set a
	  breakpoint at DllRegisterServer and start stepping.
	
	2. For an EXE server, run it in the debugger and specify /REGSVR as its
	  command-line argument.
	
	---------------------------------------------------------------------------
	
	Q. What problems might be encountered when using _ATL_MIN_CRT? What causes the
	linker error that _main is unresolved during Release builds?
	
	The following also applies to ATL 3.0:
	
	A. This usually happens when the C Run-Time (CRT) startup code is required for
	some CRT functions. You can either remove all references to the CRT functions
	that require the startup code or remove the _ATL_MIN_CRT preprocessor definition
	from your compiler settings.
	
	You can link statically or dynamically to the CRT. Statically linking causes the
	CRT code to be placed in your executable image and you do not need to have the
	CRT DLL (Msvcrt.dll). If you dynamically link to the CRT, references to the code
	in Msvcrt.dll are placed in your image. For your image to run, Msvcrt.dll must
	be present. Even when dynamically linking to the CRT, there can still be some
	code statically linked, such as DllMainCRTStartup.
	
	An entry point, explicitly or implicitly specified when linking, is called by the
	operating system after loading the image. For a DLL, the default entry point is
	DllMainCRTStartup. For an EXE, it is WinMainCRTStartup. You can override the
	default with the /ENTRY linker option. The CRT provides an implementation for
	DllMainCRTStartup, WinMainCRTStartup, and wWinMainCRTStartup (UNICODE entry
	point for an EXE). These entry points (CRT startup code) call constructors on
	global objects and initialize some data structures used by some CRT functions.
	This startup code adds about 25K to your image when statically linking.
	
	Some CRT functions can be used without the CRT startup code, for example,
	functions with the mem prefix, wcslen, wcscmp, and strlen. The following require
	the CRT startup code:
	
	- String comparison routines
	
	- Memory allocation routines
	
	- Global objects with constructors
	
	- C++ exception handling (/GX)
	
	ATL is aimed at minimizing the image size and the reliance on run-time DLLs. It
	provides alternative implementations for common CRT APIs that would otherwise
	require the CRT startup code. The use of these APIs is controlled by the
	_ATL_MIN_CRT macro. Using _ATL_MIN_CRT does not mean that you cannot use the CRT
	routines. However, if you use the routines that require the CRT startup code,
	then you will get a linker error that _main is unresolved. Providing your own
	implementation of _main does not solve this problem.
	
	If C++ exceptions (/GX) are enabled, then you must link in the startup code. The
	_ATL_MIN_CRT macro cannot be used in this case. MFC requires code to be compiled
	with the /GX option. Therefore, you cannot use _ATL_MIN_CRT in conjunction with
	MFC. You can use SEH (structured exception handling), __try, and __except with
	_ATL_MIN_CRT, because the startup code is not required. In many cases, since
	most of the CRT source code ships with the product, you can use some of this
	code and replace only parts of it with system calls to avoid the startup code.
	
	To find out what is causing the problem, do one of the following:
	
	- Open the Project Settings dialog box, select the Link tab, and click Input in
	  the Category box. Type LIBCMT.LIB in the Ignore libraries text box. Now do a
	  build. You will get a list of unresolved externals. This list contains the
	  CRT routines you are using. Look for the routines that you think may require
	  the startup code.
	
	- Turn on the /VERBOSE linker option. From the resulting linker output, you can
	  find a list of routines that require the CRT startup code.
	
	If you need the startup code, then remove the _ATL_MIN_CRT definition from the
	Project Settings. You can also dynamically link to CRT. This reduces your image
	size but requires Msvcrt.dll.
	
	When building as Release, the default option is to statically link to CRT and use
	_ATL_MIN_CRT. This gives a smaller image size than dynamically linking to CRT,
	at least when the startup code is avoided and the CRT APIs used by AppWizard are
	used.
	
	---------------------------------------------------------------------------
	
	Q. How do I update the CLSID registry key under a version-independent ProgID? Or,
	why is CLSIDFromProgID failing when passing a version independent ProgID?
	
	This problem was fixed in ATL version 3.0.
	
	A. Using the CLSIDFromProgID function fails when you pass a version independent
	ProgID with only a CurVer key. To make it work, you need to add the CLSID key
	under the version-independent ProgID.
	
	If in your .RGS file, you have:
	
	     TriBrowseObj.TriBrowseObj.1 = s 'TriBrowseObj Class'
	     {
	           CLSID = s '{3452E30B-8B87-11D0-A671-00A0C903977C}'
	     }
	     TriBrowseObj.TriBrowseObj = s 'TriBrowseObj Class'
	     {
	           CurVer = s 'TriBrowseObj.TriBrowseObj.1'
	     }
	
	  you must change it to:
	
	     TriBrowseObj.TriBrowseObj.1 = s 'TriBrowseObj Class'
	     {
	             CLSID = s '{3452E30B-8B87-11D0-A671-00A0C903977C}'
	     }
	     TriBrowseObj.TriBrowseObj = s 'TriBrowseObj Class'
	     {
	             CLSID = s '{3452E30B-8B87-11D0-A671-00A0C903977C}'
	             CurVer = s 'TriBrowseObj.TriBrowseObj.1'
	     }
	
	To fix this problem for the future, modify the wizard template (.rgs) in the
	following directory:
	
	- For Visual C++ 4.x: \Msdev\Template\Atl
	
	- For Visual C++ 5.0: \Devstudio\Sharedide\Template\Atl
	
	Change the Control.rgs file and any other .rgs files that are wrong. The
	following statements:
	
	    [!ProgID] = s '[!TypeName]'
	    {
	     CLSID = s '{[!ObjectGUID]}'
	  [!if=(InsertableEnabled, "TRUE")]
	     'Insertable'
	  [!endif]
	    }
	  [!VersionIndependentProgID] = s '[!TypeName]'
	    {
	     CurVer = s '[!ProgID]'
	    }
	
	  should be changed to:
	
	     [!ProgID] = s '[!TypeName]'
	     {
	       CLSID = s '{[!ObjectGUID]}'
	  [!if=(InsertableEnabled, "TRUE")]
	      'Insertable'
	  [!endif]
	     }
	     [!VersionIndependentProgID] = s '[!TypeName]'
	     {
	       CLSID = s '{[!ObjectGUID]}'
	       CurVer = s '[!ProgID]'
	     }
	
	---------------------------------------------------------------------------
	
	Q. What are the known problems with the ATL 2.0 Object Wizard?
	
	A. The ATL 2.0 Object Wizard might not be present in the Component Gallery. The
	ATL 2.0 Object Wizard is not installed by the main ATL 2.0 setup program
	(Atlinst.exe). It requires a separate setup program. You need to download and
	run the ATL 2.0 Object Wizard Technology Preview (Objinst.exe) from the ATL Web
	page. There is a separate ZIP file for Windows NT 3.51.
	
	The ATL 2.0 Object Wizard may crash if an older version of Oleaut32.dll is
	installed on the system. Make sure the version of Oleaut32.dll is at least
	2.20.4049. The latest version is available for download at the Internet Explorer
	3.x Web site. If this does not fix the problem, then install Service Pack 2 for
	Windows NT 4.0.
	
	---------------------------------------------------------------------------
	
	Q. What DLLs do I need to ship with my control?
	
	The following also applies to ATL 3.0:
	
	A. If you build your control with the MinDependency option, the resulting DLL (or
	EXE) is completely self contained. The control relies only on standard system
	DLLs such as Kernel32, User32, Gdi32, Ole32, Oleaut32, and Advapi32. You need to
	distribute another DLL only when you build a proxy/stub DLL that is not a part
	of your server DLL.
	
	If you build with the MinSize option, you are required to ship only Atl.dll with
	your control. You should statically link to the C Run-Time (CRT) Libraries. In
	case you do not need the CRT startup code, and with minimal use of the CRT,
	statically linking to the CRT produces a smaller image size than dynamically
	linking.
	
	---------------------------------------------------------------------------
	
	Q. What changes does a control need to run in the Visual Basic 5.0 Control
	Creation Edition?
	
	This problem was fixed in the Visual Studio 97 Service Pack 1.
	
	A. If your control supports connection points and the IQuickActivate interface,
	then it must support the IPropertyNotifySink connection point for Visual Basic
	5.0. To support the IPropertyNotifySink connection point, add the following to
	the inheritance list:
	
	     public IPropertyNotifySinkCP<CYourControlName>
	
	And add the following to your connection point map:
	
	     CONNECTION_POINT_ENTRY(IID_IPropertyNotifySink)
	
	---------------------------------------------------------------------------
	
	Q. What changes does a control need to run in an MFC 4.2b container?
	
	The following also applies to ATL 3.0:
	
	A. There is a problem with MFC 4.2b in setting up the event sink when the
	IQuickActivate interface is used. The workaround is to comment out the following
	line in your interface map:
	
	     COM_INTERFACE_ENTRY_IMPL(IQuickActivate)
	
	You can also remove the following line from your inheritance list:
	
	     public IQuickActivateImpl<CYourControlName>
	
	---------------------------------------------------------------------------
	
	Q. Why do I get exceptions when debugging my control? What do they mean?
	
	The following also applies to ATL 3.0:
	
	A. Running the debugger in an environment that supports Structured Exception
	Handling (SEH), like Windows NT, may produce exceptions like the following:
	
	  First-chance exception in MY.OCX (KERNEL32.DLL): 0xC0000005:
	  Access Violation.
	
	These exceptions occur at a lower level in the system than your control. For more
	information, see the Microsoft Knowledge Base article: Q105675.
	
	---------------------------------------------------------------------------
	
	Q. Why doesn't the container use my connection point interface?
	
	The following also applies to ATL 3.0:
	
	A. Make sure your outgoing interface is not defined as a dual interface. If the
	connection point specifies an outgoing interface as a dual interface, most
	containers are not able to create a sink object to connect to that connection
	point. Containers that provide connection sinks for COM objects have to
	dynamically create those sinks. If you specify a dual interface, it would be
	possible for events to be fired using the IDispatch part of the dual interface.
	It is also possible that the COM object fires events through the custom or
	v-table part of the dual interface that is not implemented by most containers.
	Therefore, most containers protect against hooking up a connection to a dual
	interface. The alternative is to use a dispinterface. Containers such as Visual
	Basic 5.0 and Internet Explorer only allows a dispinterface to be connected.
	
	If you implement both the sink and the source, then it is recommended that you
	use a dual interface for connection points. See the ATL Connect sample for more
	information.
	
	
	Additional query words: Frequently Asked Frequent
	
	======================================================================
	Keywords          : kbATL200 kbATL210 kbVC500 kbVC600 kbATL300 kbFAQ MSGRAPH kbGrpDSMFCATL kbfaq
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL200 kbATL300 kbATL210 kbVCNET
	Version           : :2.0,2.1,3.0
	Issue type        : kbinfo
	
	=============================================================================
	

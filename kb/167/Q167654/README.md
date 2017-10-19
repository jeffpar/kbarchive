---
layout: page
title: "Q167654: HOWTO: Visual C++ 5.0 (Professional &amp; Enterprise) Support FAQ"
permalink: /kb/167/Q167654/
---

## Q167654: HOWTO: Visual C++ 5.0 (Professional &amp; Enterprise) Support FAQ

	Article: Q167654
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbATL kbEEdition kbGenInfo kbVC500 kbGrpDSTools kbArtTypeINFkbfaq
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a list of Frequently Asked Questions and their answers.
	All questions concern Visual C++ 5.0. Issues relating to the Enterprise Edition
	only are located at the bottom of the article.
	
	MORE INFORMATION
	================
	
	1. Q. Where can I find a listing of new features in Visual C++ 5.0?
	
	  A. For a listing of new features in Visual C++, please refer to the "What's
	  New" sections for the appropriate Visual C++ product. In addition, an
	  extensive readme (VCREAD.HTM) comes with Visual C++ 5.0. This has a wealth of
	  information on subjects like ATL, Enterprise development, compiler issues and
	  more, that we were unable to include in the online documentation. Like
	  VCREAD, READMEDT.HTM and ENVIRON.HTM are readme files concerning the visual
	  database tools and IDE issues.
	
	2. Q. Where can I find InfoViewer FAQ issues?
	
	  A. Please see the Visual Studio FAQ at www.microsoft.com/vstudio.
	
	3. Q. Why do I have to use Microsoft's Internet Explorer (IE) v3.0 with Visual
	  C++ 5.0?
	
	  A. The InfoViewer, which displays the online documentation, uses the Internet
	  Explorer control that is part of Internet Explorer 3.0. While this is
	  required for the InfoViewer, it does not mean you have to use Internet
	  Explorer as your default browser.
	
	4. Q. Why are the installed binaries in the \program files\devstudio\ sharedide
	  different than those on the CD?
	
	  A. When Visual C++ is installed, several of the executables are "bound" using
	  imagehlp API's to decrease load time.
	
	5. Q. The VCREAD.HTM file says that you should not install over Visual C++ 4.x,
	  and later that they can coexist. Please explain.
	
	  A. Installing Visual C++ 5.0 into the directory used by Visual C++ 4.x
	  (\MSDEV) can lead to unpredictable behavior. One reason for this is that the
	  directory structure for Visual C++ 5.0 has radically changed. Visual C++ 5.0
	  does not replace any of Visual C++ 4.x's registry entries or program groups.
	  So, according to your desktop, Visual C++ 4.x appears to still be installed.
	  Therefore, it appears that you can run Visual C++ 4.x. However, it will not
	  succeed. Instead, you should install Visual C++ 5.0 into a separate directory
	  structure to ensure a clean install. You do not need to uninstall Visual C++
	  4.x prior to installing Visual C++ 5.0 since the two can co-exist. Please see
	  VCREAD for more detailed information. One additional caveat that is not in
	  the readme is that Visual C++ 5.0 includes some of the same controls that
	  were included in Visual C++ 4.x. These will be overwritten if you choose to
	  install the controls. The affected controls are: DBGrid32.OCX, DSList32.OCX,
	  MSComm32.OCX, MCI32.OCX, MSMask23.OCX, and PicClp32.OCX.
	
	6. Q. Why do I get a missing export or ordinal 6451 in MFC42.DLL when I start
	  MSDEV.EXE for the first time?
	
	  A. This happens when you use the MFC42.DLL that shipped with Visual C++ 4.2.
	  If you have not rebooted since installing Visual C++ 5.0, rebooting solves
	  the problem. It is also possible that an installation program for another
	  product can overwrite this DLL.
	
	7. Q. Attempting to use some tools from newly created project, may generate the
	  following error:
	
	  The specified path is invalid.
	
	  A. This error message occurs because the project has not generated the path
	  information for the tools. Build the project to work around this. In some
	  cases, closing and reopening the workspace may work around the problem.
	
	8. Q. Why doesn't anything happen when I try to profile my application from
	  within Visual C++?
	
	  A. To work around this problem, add an environment variable to your path that
	  includes c:\program files\devstudio\vc\bin, presuming Visual C++ is installed
	  on your C: drive and that you have selected the default installation
	  options.
	
	  On Windows NT:
	
	  1. In the Control Panel, select the System applet.
	
	  2. From the Environment tab, enter PATH in the Variable field.
	
	  3. In the Value field, enter c:\program files\devstudio\vc\bin.
	
	  4. Click OK.
	
	  The next time you start Visual C++, the profiler will work correctly.
	
	  On Windows 95:
	
	  1. Open the Autoexec.bat file with an editor.
	
	  2. Add the following line, making sure to include the quotation marks:
	
	        set PATH= c:\"program files"\devstudio\vc\bin
	     
	
	  3. The environment variable will take effect when you reboot your computer.
	
	9. Q. Why isn't the ODBC 3.0 Programmers Reference included in the online
	  documentation?
	
	  A. We provide up-to-date .HLP files for the ODBC Programmers Reference on the
	  CD in the \DevStudio\SharedIDE\Help directory (See VCREAD.HTM for more
	  information).
	
	10. Q. What is MIDL error MIDL2039?
	
	  A. This is a new MIDL error. Previously, MIDL permitted the (erroneous) use
	  of invalid types in OLE automation (or dual) interfaces. The set of types
	  that can be passed through an automation interface is much more restricted
	  than the set that can be passed in an arbitrary COM interface.
	
	  If the rest of the interface isn't using OLE automation data types (for
	  Example, an ULONG is typically not an OLE automation data type), the
	  following two examples can cause this error:
	
	     [
	     object,
	     uuid(CE2EDE50-8E6A-11D0-8C74-00C04FE0DFDF),
	     dual,     << implicit oleautomation
	     helpstring("ISome Interface"),
	     pointer_default(unique)
	     ]
	   
	
	  -or-
	
	     [
	     object,
	     uuid(CE2EDE50-8E6A-11D0-8C74-00C04FE0DFDF),
	     oleautomation,
	     helpstring("ISome Interface"),
	     pointer_default(unique)
	     ]
	   
	
	11. Q. From the command line, I go to my projects directory and there is no .MAK
	  file for my project. Why?
	
	  A. .MAK files are no longer automatically generated. You can manually export
	  MAK files from the Export Makefile selection in the Project Menu. In
	  addition, MAK files can be automatically exported each time the
	  modifications are saved. To do so, from the Tools menu select Options. In
	  the Options dialog box, click the Build tab and select the "Export makefile
	  when saving project file" check box.
	
	12. Q. Will there be a release of Visual C++ 5.0 that targets the Macintosh
	  platform?
	
	  A. At this time, a Macintosh Cross-Development Edition is not planned for
	  Visual C++ 5.0. The latest version of Visual C++ Cross-Development Edition
	  that targets the Macintosh platform is version 4.0b. For more information on
	  Visual C++ Cross-Development Edition for the Macintosh, please see the
	  product documentation on http://www.microsoft.com/visualc/.
	
	13. Q. While installing Visual C++ 5.0 in Windows NT 4.0, I get the following
	  message:
	
	  Setup detects that you are not a member of the Administrator group,
	  which is required for installing ODBC, ActiveXRPC debugging, Internet
	  Explorer, and Just-in-Time debugging. Continue ?, Yes ,No "
	
	  Does this mean that I will not be able to use Visual C++ if I continue?
	
	  A. Visual C++ version 5.0 installation in the Windows NT 4.0 operating system
	  requires that the user account have administrative privileges. This is
	  necessary for installing Internet Explorer and the other components
	  mentioned in the message above. Visual C++ uses Internet Explorer to access
	  the online documentation. If you continue the installation, you will be
	  deprived from using the listed components. Also, you will not be able to
	  insert any third party ActiveX Controls included in the package in your
	  application.
	
	14. Q. Why isn't the put_Font or putref_Font method called when an ActiveX
	  control's Font property is changed by the ActiveX Control Pad?
	
	  A. The put_Font or putref_Font method is called only when you completely
	  replace your control's Font object with a new one. When you change the font
	  in the ActiveX Control Pad, get_Font is called to get a pointer to the Font
	  object for the ActiveX Control Pad. Changes made by the Control Pad are made
	  directly to that object. The ActiveX Control Pad does not create a new Font
	  object and assign it to your Font property.
	
	  The following example demonstrates a case where the font property is changed
	  without calling the put_Font or putref_Font method:
	
	        object CLASSID="clsid:E882D673-878E-11D0-B00C-000000000000"
	                       id="FontTest1">
	          /object>
	        object CLASSID="clsid:E882D673-878E-11D0-B00C-000000000000"
	                       id="FontTest2">
	          /object>
	
	        SCRIPT LANGUAGE="VBScript">
	
	        !--
	        Sub Window_OnLoad
	           FontTest1.Font.Name = "times new roman"
	           FontTest1.Font.Size = 16
	           FontTest2.Font = FontTest1.Font
	        End Sub
	     -->
	     /SCRIPT>
	   
	
	15. Q. How do I get the <PARAM> tag to work with an ATL control?
	
	  A. You need to support the IPropertyBag interface for the HTML <PARAM>
	  tag to work with your ATL control. An implementation of this interface is
	  supplied in the IPropertyBagImpl class that comes with ATL 2.1. The CIRC
	  sample demonstrates how to support IPersistPropertyBag and add your
	  properties to the property map.
	
	16. Q. What are the reasons an ATL server might fail to register?
	
	  A. The following are the top three reasons an ATL server might fail to
	  register:
	
	  1. You built your project with _WIN32_WINNT=0x400 (the default), and you are
	     not running the ATL server under Windows NT 4.0 or you do not have an
	     up-to-date version of OLEAUT32.DLL. To solve this problem, run DUMPBIN
	     /EXPORTS OLEAUT32.DLL and search for UnregisterTypelib. If it is not
	     there, then your server cannot run. Remove this #define statement from
	     STDAFX.H if you want to run the ATL server under Windows 95 or older
	     versions of Windows NT. Note that the #define _WIN32_WINNT=0x400 could be
	     anywhere, even in the Build settings. Alternatively, you can use
	     LoadLibrary and GetProcAddress so that you can run optimally under both
	     Windows 95 and Windows NT 4.0. The OLEAUT32.DLL that ships with the
	     Internet Explorer 3.x is up to date.
	
	  2. You built your project as MinSize or Debug and ATL.DLL is not properly
	     installed on the system. The correct version of ATL.DLL must be copied and
	     registered by REGSVR32. There are Windows NT and Windows 95 versions of
	     ATL.DLL. The Windows 95 version runs under Windows NT. However, since it
	     does not use the UNICODE APIs, it is slightly less efficient. Unless you
	     build your project as MinDependency, you need to install the correct
	     version of ATL.DLL and run REGSVR32 on it before you install your server.
	
	  3. You built your project as UNICODE and you cannot run it under Windows 95.
	
	  Following are the steps to troubleshoot:
	
	  1. For a DLL server, run REGSVR32 in the debugger.
	
	  2. Open the Project Settings dialog box and click the Debug tab.
	
	  3. In the Executable for debug session text box, enter the full path to
	     REGSVR32.EXE, such as C:\SHAREDIDE\BIN\REGSVR32.EXE.
	
	  4. In the Program arguments text box, specify the full path to your DLL, such
	     as C:\MYPROJECTS\MyFolder\DEBUG\MyFile.DLL.
	
	  5. Set a breakpoint at DllRegisterServer and start stepping.
	
	  For an EXE server, run it in the debugger and specify /REGSVR as its
	  command-line argument.
	
	17. Q. What causes linker error LNK2001 during Release MinDependency builds of
	  ATL projects?
	
	  A. This can happen when the C Run-Time (CRT) startup code is required for
	  some CRT functions. You can either remove all references to the CRT
	  functions or remove the _ATL_MIN_CRT preprocessor definition from your
	  compiler settings.
	
	  Some CRT functions can be used without the CRT startup code, for example,
	  functions with the mem prefix. The following require the CRT startup code:
	
	   - String comparison routines
	
	   - Global objects with constructors
	
	   - Exception handling
	
	  In Visual C++ 5.0, statically linking the startup code adds about 25K to your
	  image. If size is an issue for your control, you may be able to avoid
	  linking in the startup code.
	
	  To find out what is causing the problem:
	
	  1. Open the Project Settings dialog box, click the Link tab, and click Input
	     in the Category box.
	
	  2. Type LIBCMT.LIB in the Ignore libraries text box.
	
	  3. Do a build.
	
	  4. You get a list of unresolved externals. This list contains the CRT
	     routines you are using. Look for the routines that you think may require
	     the startup code.
	
	  5. Turn on the /VERBOSE linker option.
	
	  6. From the resulting linker output, you can find a list of routines that
	     require the CRT startup code.
	
	  7. If you need the startup code, remove the _ATL_MIN_CRT definition from the
	     Project Settings. You can also dynamically link to CRT. This reduces your
	     image size but requires MSVCRT.DLL.
	
	  When you are building as MinSize, the default option is to statically link to
	  CRT and use _ATL_MIN_CRT. This gives a smaller image size than dynamically
	  linking to CRT, at least when the startup code is avoided and the CRT APIs
	  used by AppWizard are used.
	
	18. Q. In ATL projects, how do I update the CLSID registry key under a
	  version-independent ProgID?
	
	  A. Creating the CLSID under a version-independent ProgID fails when you pass
	  this ProgID with only a CurVer key. To make it work, you need to add the
	  CLSID key under the version-independent ProgID.
	
	  If you have the following in your .RGS file:
	
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
	   
	
	  You also need to modify the wizard template (.RGS) in the following
	  directory:
	
	   - For Visual C++ 4.x: \MSDEV\TEMPLATE\ATL
	
	   - For Visual C++ 5.0: \DEVSTUDIO\SHAREDIDE\TEMPLATE\ATL
	
	  Change the CONTROL.RGS file and any other .RGS files that are wrong. The
	  following statements:
	
	     [!ProgID] = s '[!TypeName]'
	     {
	     CLSID = s '{[!ObjectGUID]}'
	     [!if=(InsertableEnabled, "TRUE")]
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
	
	19. Q. What are the known problems with the ATL 2.0 Object Wizard?
	
	  A. The ATL 2.0 Object Wizard might not be present in the Component Gallery.
	  The ATL 2.0 Object Wizard is not installed by the main ATL 2.0 setup program
	  (ATLINST.EXE). It requires a separate setup program. You need to download
	  and run the ATL 2.0 Object Wizard Technology Preview (OBJINST.EXE) from the
	  ATL Web page. There is a separate ZIP file for Windows NT 3.51.
	
	  The ATL 2.0 Object Wizard may crash if an older version of OLEAUT32.DLL is
	  installed on the system. Make sure the version of OLEAUT32.DLL is at least
	  2.20.4049. The latest version is available for download at the Internet
	  Explorer 3.x web site.
	
	20. Q. Can I use a scripting language other than VBScript for macros?
	
	  A. No, VBScript is the only scripting language Developer Studio supports for
	  macro recording and editing.
	
	21. Q. How can I debug a VBScript macro?
	
	  A. You can use the PrintToOutputWindow method and the MsgBox command to
	  display debugging messages while the macro is running. Currently, macros
	  cannot be debugged using the Developer Studio debugger.
	
	22. Q. Can a macro handle a Developer Studio event?
	
	  A. Yes, you just need to create a VBScript procedure with the name of the
	  object and event you want to handle. Refer to the Events section of the
	  Developer Studio Objects Reference for the correct syntax for each event. As
	  an example, if you wanted to handle the WindowActivate event that occurs
	  when a window is activated, your procedure would look similar to the
	  following:
	
	     sub Application_WindowActivate(theWindow)
	        ' Insert code to handle the event here
	     end sub
	
	23. Q. How can I turn off VBScript error dialogs, so my macro can run without
	  user intervention even if it encounters errors?
	
	  A. You can use the VBScript "On Error Resume Next" statement. Put this
	  statement on the line preceding any statements where an error may occur. An
	  example of this is before a call to the Documents.Open method where the file
	  you are attempting to open may not exist. If you put in the On Error
	  statement, and the file cannot be found, no error dialog will be displayed,
	  and the macro will continue running.
	
	24. Q. Is it possible to control docking windows like Project, Watch, Output
	  through the object model?
	
	  A. No, these windows are not available in the Windows collection. However,
	  you can display messages in the Output window with the PrintToOutputWindow
	  method.
	
	25. Q. I see that there is a DevStudio Add-in Wizard and it produces a Visual
	  C++ project. Can add-ins be developed with other programming languages?
	
	  A. Yes, add-ins can be created in any language that supports exposing COM
	  interfaces, including languages other than Visual C++, like Visual Basic,
	  and Visual J++. To find out more about developing add-ins, and for sample
	  add-ins, refer to the Developer Studio Add-ins documentation.
	
	26. Q. Where can I get more answers to Developer Studio Automation questions?
	
	  A. Refer to the "How Do I ..." and "Frequently Asked Questions" sections of
	  the "Automating Tasks in Developer Studio" section of the User's Guide.
	
	Visual C++ Enterprise Edition FAQ
	---------------------------------
	
	1. Q. Can I use the Microsoft Visual Database Tools with any ODBC datasource?
	
	  A. Yes, with varying degrees of functionality.
	
	   - Any ODBC datasource -- open and edit tables, create and execute queries
	
	   - SQL Server 6.0 and Oracle 7.2 or 7.3 -- open and edit tables, create and
	     execute queries, edit stored procedures and triggers
	
	   - SQL Server 6.5 -- open and edit tables, create and execute queries, edit
	     stored procedures and triggers, debug stored procedures and triggers,
	     design databases
	
	2. Q. Can I debug Oracle databases?
	
	  A. No, this would require changes to the Oracle Database Server. SQL Debugging
	  works only with SQL Server 6.5 on Intel platforms.
	
	3. Q. Can I debug with Visual C++ Enterprise Edition 4.2 and Visual C++
	  Enterprise Edition 5.0 at the same time?
	
	  A. Yes, Visual C++ Enterprise Edition 5.0 SQL Debugging was designed to co-
	  exist with Visual C++ Enterprise Edition 4.2 SQL Debugging.
	
	4. Q. Why does Automation manager start up when I use SQL Debugging, but not
	  shut down when I close Visual C++?
	
	  A. Automation manager is started automatically by Visual C++ when it is first
	  needed. Visual C++ does not shut it down because Automation Manager doesn't
	  provide an API to determine if other applications are using it. You can
	  safely shut it down when it displays that no connections are in use.
	
	5. Q. How do I start SQL debugging in Visual C++ Enterprise Edition?
	
	  A. Please refer to the Hello World sample in the Visual C++ Enterprise Edition
	  5.0 documentation.
	
	6. Q. What software do I need installed to start SQL Debugging?
	
	  A. Client Side:
	
	   - Visual C++ Enterprise Edition 5.0
	
	   - Win95 or NT 4.0
	
	  Server Side:
	
	   - Visual C++ Enterprise Edition 5.0 server side components from Visual C++
	     Enterprise Edition Server setup found on the second Visual C++ Enterprise
	     Edition CD
	
	   - SQL Server 6.5 and Service Pack 2 found on the second Visual C++
	     Enterprise Edition CD
	
	   - Windows NT 4.0 or Windows NT 3.51 + Service Pack 5.0a, SP5 found on the
	     second Visual C++ Enterprise Edition CD
	
	  NOTE: You can install everything on one machine and do "local debugging," or
	  you can install SQL Server on a separate machine and do "remote debugging."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbEEdition kbGenInfo kbVC500 kbGrpDSTools kbArtTypeINF kbfaq
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

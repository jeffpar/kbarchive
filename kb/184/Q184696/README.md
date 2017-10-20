---
layout: page
title: "Q184696: HOWTO: Create a DCOM VBR File for a VC++ Server"
permalink: /kb/184/Q184696/
---

## Q184696: HOWTO: Create a DCOM VBR File for a VC++ Server

{% raw %}

	Article: Q184696
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbGrpDSVB
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Application Setup Wizard in Visual Basic 5.0 and the Package and Deployment
	Wizard in Visual Basic 6.0 require a Visual Basic Registration (.vbr) file to
	create a setup program for a client application that uses a distributed
	Component Object Model (DCOM) server. If you use Microsoft Visual C++ to create
	a DCOM server, you must also create a .vbr file because Visual C++ does not
	automatically create .vbr files. This article demonstrates how to create a .vbr
	file for a Visual C++ DCOM server.
	
	MORE INFORMATION
	================
	
	NOTE: This article requires extensive use of the Windows Registry Editor
	(RegEdit.exe). You should be familiar with modifying the Windows registry before
	attempting the steps outlined in this article.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT or Windows 2000, you should also update your
	Emergency Repair Disk (ERD).
	
	A .vbr file is similar to a .reg (Windows Registry) file. It has a slightly
	different format, but contains most of the same information. For more
	information about .reg files view the "Importing and Exporting the Registry to a
	Text File" Help topic in Registry Editor (Regedit.exe).
	
	A .vbr file has the following general format:
	
	- Visual Basic 5.0 header information.
	
	- Registry keys to identify the server type library (.tlb).
	
	- Registry keys for the server.
	
	- Registry keys to identify each class within the server.
	
	- Registry keys for each interface of each class.
	
	To see what a .vbr file looks like, you can make a simple ActiveX server in
	Visual Basic and automatically generate a .vbr file.
	
	Steps to Create a Sample .vbr File in Visual Basic
	--------------------------------------------------
	
	1. Create a new ActiveX EXE project in Visual Basic.
	
	2. On the Project menu, select Project Properties, and then select the Component
	  tab.
	
	3. Select the Remote Server Files check box.
	
	4. On the File menu, click Make <sample>.exe to make the sample .exe file.
	
	Visual Basic creates a .vbr file in the same folder as the .exe file.
	
	NOTE: You can add some properties and methods to the default Class1 module in
	your ActiveX EXE project to see a more detailed example of a .vbr file.
	
	Steps to Create a .vbr File for a Visual C++ Server
	---------------------------------------------------
	
	If a .reg file for your Visual C++ server is available, you can use it to obtain
	the information you need to create a .vbr file. If you have a .reg file for your
	Visual C++ server, go to the "Create The .vbr File" section later in this
	document.
	
	Complete the following steps to manually create a .vbr file:
	
	Collect Registry Information:
	
	1. Use Notepad to view the .idl file for the type library for your Visual C ++
	  server. Depending on the type of control you have (ATL or MFC), you might
	  need to use the .odl file instead. You can copy and paste the information
	  into a Notepad text file for future reference.
	
	2. Note the universally unique identifier (UUID) for the server's type library
	  from the .idl file. You will use this UUID in step 3. You can find the type
	  library UUID in the section delimited by square brackets that precedes the
	  line "library <AppName>". The following example shows the UUID in an
	  .idl file for an application named MyServer.exe:
	
	        [
	          uuid(EDBFE98B-1FC6-11D1-9D43-00AA00A70E35),
	          version(2.0),
	          helpstring("My Server is a Test")
	        ]
	        library MyServer
	
	3. Start Registry Editor (RegEdit.exe). From the Edit menu, select Find, and
	  then locate the following key:
	
	  HKEY_CLASSES_ROOT\TypeLib\<UUID from step 2>
	
	  Select Export Registry File from the Registry menu to export the key. Save the
	  file as RegData.txt.
	
	  NOTE: The .txt extension allows you to easily modify the file with Notepad.
	
	4. Run Notepad and open RegData.txt. Leave this file open.
	
	5. Using RegEdit.exe locate the following key:
	
	  HKEY_CLASSES_ROOT\<ServerName.ClassName>\CLSID
	
	  There may be several of these keys. (You can use CTRL+F to Find Again). For
	  each occurrence you find in the registry, export the key to a file with the
	  .txt extension. For example, you can find the following keys in the sample
	  MyServer.exe, which has three classes:
	
	  HKEY_CLASSES_ROOT\MyServer.clsCar\CLSID
	  HKEY_CLASSES_ROOT\MyServer.clsDriver\CLSID
	  HKEY_CLASSES_ROOT\MyServer.clsRoad\CLSID
	
	6. Open the .txt files created above, and copy and paste their contents into
	  RegData.txt.
	
	7. For each ClassId obtained in step 5, use RegEdit to find the relevant keys,
	  such as:
	
	  HKEY_CLASSES_ROOT\CLSID\<GUID from step 5>
	
	  Export each key to a file with the .txt extension.
	
	8. Open each .txt file created above, and copy and paste the information to the
	  end of the RegData.txt file created in step 4.
	
	9. Return to the .idl file and find the interface IDs. You can tell which
	  globally unique identifiers (GUIDs) are the interface IDs because each one is
	  in a section that is enclosed in square brackets and precedes the line that
	  begins with "interface myInterfaceName," as in the following example:
	
	        [
	              odl,
	              uuid(EDBFE98C-1FC6-11D1-9D43-00AA00A70E35),
	              version(1.0),
	              hidden,
	              dual,
	              nonextensible,
	              oleautomation
	            ]
	            interface _clsCar : IDispatch {
	
	10. For each interface ID, use RegEdit.exe to find the relevant keys, such as:
	
	  HKEY_CLASSES_ROOT\Interface\<GUIDfrom step 8>
	
	  Export each key to a file with the .txt extension. Copy and paste the data
	  from the .txt files into RegData.txt
	
	Create the .vbr File:
	
	1. Add the following three lines to a text file:
	
	  VB5SERVERINFO
	  VERSION=X.X
	  APPDESCRIPTION=My app description
	
	  NOTE: In the above three lines, replace X.X with the major.minor version
	  numbers from the .idl file. Also, replace "My app description" with the
	  "helpstring" data from the .idl file.
	
	2. Add several lines based on the keys under HKEY_CLASSES_ROOT\Typelib\
	  ServerID. In your Notepad file, RegData.txt, they look similar to the
	  following lines:
	
	  [HKEY_CLASSES_ROOT\TypeLib\{EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}]
	  [HKEY_CLASSES_ROOT\TypeLib\{EDBFE98B-1FC6-11D1-9D43-
	  00AA00A70E35}\2.0]@="My Server is a Test"
	  [HKEY_CLASSES_ROOT\TypeLib\{EDBFE98B-1FC6-11D1-9D43-
	  00AA00A70E35}\2.0\0]
	  [HKEY_CLASSES_ROOT\TypeLib\{EDBFE98B-1FC6-11D1-9D43-
	  00AA00A70E35}\2.0\0\win32]@="E:\\AutoServer\\MyServer.exe"
	  [HKEY_CLASSES_ROOT\TypeLib\{EDBFE98B-1FC6-11D1-9D43-
	  00AA00A70E35}\2.0\FLAGS]@="0"
	  [HKEY_CLASSES_ROOT\TypeLib\{EDBFE98B-1FC6-11D1-9D43-
	  00AA00A70E35}\2.0\HELPDIR]@="E:\\AutoServer"
	
	  Copy and paste the matching lines either from the RegData.txt file or from the
	  .reg file created for the Visual C++ object.
	
	3. Modify the text as follows:
	
	  a. Remove the square brackets and @ symbols.
	
	  b. Delete the fully qualified paths to file names. For instance, replace
	     "E:\\AutoServer\\MyServer.exe" with "MyServer.exe".
	
	  c. Remove the quotes around any values on the right side of the = sign.
	
	  d. Put each entry on its own line. Due to screen width the text may wrap on
	     the screen for appearance only.
	
	4. You do not need to include the first entry, which indicates the parent key.
	  Nor do you need to include any keys that also reference the HELPDIR key. The
	  modified version of the preceding .reg file looks like the following sample
	  in the .vbr file:
	
	  HKEY_CLASSES_ROOT\Typelib\{EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}\2.0
	  = MyServer is a Test
	  HKEY_CLASSES_ROOT\Typelib\{EDBFE98B-1FC6-11D1-9D43-
	  00AA00A70E35}\2.0\0\win32 = MyServer.exe
	  HKEY_CLASSES_ROOT\Typelib\{EDBFE98B-1FC6-11D1-9D43-
	  00AA00A70E35}\2.0\FLAGS = 0
	
	5. Follow the same conversion process for each registry key you exported. The
	  .vbr file used for the Myserver example has three classes and looks like the
	  following:
	
	Sample Code
	-----------
	
	        VB5SERVERINFO
	        VERSION=1.0.0
	        APPDESCRIPTION=My Server is a Test
	        HKEY_CLASSES_ROOT\Typelib\{EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}\2.0
	         = My Server is a Test
	        HKEY_CLASSES_ROOT\Typelib\{EDBFE98B-1FC6-11D1-9D43-
	         00AA00A70E35}\2.0\0\win32 = MyServer.exe
	        HKEY_CLASSES_ROOT\Typelib\{EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}\2.0\ 
	         FLAGS = 0
	        HKEY_CLASSES_ROOT\MyServer.clsRoad\CLSID = {EDBFE991-1FC6-11D1-9D43-
	         00AA00A70E35}
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE991-1FC6-11D1-9D43-00AA00A70E35}\ProgID
	         = MyServer.clsRoad
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE991-1FC6-11D1-9D43-
	         00AA00A70E35}\Version = 2.0
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE991-1FC6-11D1-9D43-
	         00AA00A70E35}\Typelib = {EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE991-1FC6-11D1-9D43-00AA00A70E35}\ 
	         LocalServer32 = MyServer.exe
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE990-1FC6-11D1-9D43-00AA00A70E35} =
	         clsRoad
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE990-1FC6-11D1-9D43-00AA00A70E35}\ 
	         ProxyStubClsid = {00020420-0000-0000-C000-000000000046}
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE990-1FC6-11D1-9D43-00AA00A70E35}\ 
	         ProxyStubClsid32 = {00020420-0000-0000-C000-000000000046}
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE990-1FC6-11D1-9D43-00AA00A70E35}\ 
	         Typelib = {EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE990-1FC6-11D1-9D43-00AA00A70E35}\ 
	         Typelib\"version" = 2.0
	        HKEY_CLASSES_ROOT\MyServer.clsDriver\CLSID =
	         {EDBFE98F-1FC6-11D1-9D43-00AA00A70E35}
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE98F-1FC6-11D1-9D43-00AA00A70E35}\ProgID
	         = MyServer.clsDriver
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE98F-1FC6-11D1-9D43-
	         00AA00A70E35}\Version = 2.0
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE98F-1FC6-11D1-9D43-
	         00AA00A70E35}\Typelib = {EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE98F-1FC6-11D1-9D43-00AA00A70E35}\ 
	         LocalServer32 = MyServer.exe
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98E-1FC6-11D1-9D43-00AA00A70E35} =
	         clsDriver
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98E-1FC6-11D1-9D43-00AA00A70E35}\ 
	         ProxyStubClsid = {00020420-0000-0000-C000-000000000046}
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98E-1FC6-11D1-9D43-00AA00A70E35}\ 
	         ProxyStubClsid32 = {00020420-0000-0000-C000-000000000046}
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98E-1FC6-11D1-9D43-00AA00A70E35}\ 
	         Typelib = {EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98E-1FC6-11D1-9D43-00AA00A70E35}\ 
	         Typelib\"version" = 2.0
	        HKEY_CLASSES_ROOT\MyServer.clsCar\CLSID =
	         {EDBFE98D-1FC6-11D1-9D43-00AA00A70E35}
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE98D-1FC6-11D1-9D43-00AA00A70E35}\ 
	         ProgID = MyServer.clsCar
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE98D-1FC6-11D1-9D43-00AA00A70E35}\ 
	         Version = 2.0
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE98D-1FC6-11D1-9D43-00AA00A70E35}\ 
	         Typelib = {EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}
	        HKEY_CLASSES_ROOT\CLSID\{EDBFE98D-1FC6-11D1-9D43-00AA00A70E35}\ 
	         LocalServer32 = MyServer.exe
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98C-1FC6-11D1-9D43-00AA00A70E35}
	         = clsCar
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98C-1FC6-11D1-9D43-00AA00A70E35}\ 
	         ProxyStubClsid = {00020420-0000-0000-C000-000000000046}
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98C-1FC6-11D1-9D43-00AA00A70E35}\ 
	         ProxyStubClsid32 = {00020420-0000-0000-C000-000000000046}
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98C-1FC6-11D1-9D43-00AA00A70E35}\ 
	         Typelib = {EDBFE98B-1FC6-11D1-9D43-00AA00A70E35}
	        HKEY_CLASSES_ROOT\INTERFACE\{EDBFE98C-1FC6-11D1-9D43-00AA00A70E35}\ 
	         Typelib\"version" = 2.0
	
	The Application Setup Wizard in Visual Basic 5.0 and the Package and Deployment
	Wizard in Visual Basic 6.0 can use this .vbr file to create a setup program for
	a Visual Basic client that uses the server remotely.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q161837 HOWTO: Create a DCOM Client/Server Application
	
	  Q266717 HOWTO: Create a DCOM Client/Server Application by Using VB
	
	  Q267836 HOWTO: Create a DCOM Client/Server with Events by Using Visual Basic
	
	  Q268550 HOWTO: Use Dcomcnfg for a Visual Basic DCOM Client/Server Application
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

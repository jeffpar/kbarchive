---
layout: page
title: "Q179385: HOWTO: Add Custom ATL Objects to the ATL Object Wizard"
permalink: /kb/179/Q179385/
---

## Q179385: HOWTO: Add Custom ATL Objects to the ATL Object Wizard

	Article: Q179385
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.1,2.0,2.1,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL200 kbATL210 kbAutomation kbide kbVC500 kbVC600 kbATL300 MSGRAPH kbATL100
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 1.0, 1.1, 2.0, 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Starting with version 5.0, Visual C++ contains an ATL Object Wizard to insert
	stock ATL objects into an ATL project. It is possible to add custom configurable
	ATL objects to the ATL Object Wizard dialog box. This information is documented
	in Visual C++ 6.0 in the file Template.txt, which is located in the following
	directory:
	
	  <Visual Studio Path>\Common\MsDev98\Template\Atl.
	
	This article supplements that documentation; however, these techniques are
	unsupported and are subject to change in future versions of the product. This
	information is supplied as a courtesy for developers who may wish to extend the
	functionality of the standard objects.
	
	
	MORE INFORMATION
	================
	
	In a Visual C++ ATL project, clicking New ATL Object on the Insert menu displays
	a dialog box titled "ATL Object Wizard." This dialog box normally contains
	several categories of predefined ATL objects with configurable properties. It is
	also possible to add custom-configurable ATL objects to this dialog box.
	
	The following sections develop these general steps for creating and installing a
	custom ATL object:
	
	- Create Property Pages
	
	- Create a Custom ATL Object Template
	
	- Create an ATL Object Wizard Control Script (.CTL) File
	
	- Register the Custom ATL Object with the ATL Object Wizard
	
	The Wizard looks in the \Template\Atl folder for the control script (.ctl) file;
	the other files created in these steps may be placed there also.
	
	NOTE: In Visual C++ 5.0, the base directory for folders referenced herein is
	<DevStudio path>\SharedIde; in version 6.0 it is <Visual Studio
	Path>\Common\MsDev98.
	
	Create Property Pages
	---------------------
	
	Property pages allow the user to customize the object being inserted by setting
	symbol values (the Wizard substitutes symbols with their values when it
	processes the object's template). The Wizard creates a property sheet dialog box
	with OleCreatePropertyFrame(), passing it the list of property pages specified
	in the control script (the [!Dialog(...)] directive lists property pages'
	ProgIDs, which the Wizard uses to determine their CLSIDs). Property pages
	implement the IPropertyPage interface. Where appropriate, your custom ATL object
	may use standard property pages (found in \bin\ide); one useful general purpose
	property page is "Names" (implemented in Atlobj.dll).
	
	The ATL Object Wizard implements an interface called ISymbolMap. Using ISymbolMap
	methods, property pages set symbol values in the Wizard and get current symbol
	settings. The Wizard replaces symbol references in the object's template with
	these values. To obtain the ISymbolMap interface, query the IUnknown pointer
	passed into IPropertyPage's SetObjects method. See "ISymbolMap Interface
	Definition for C/C++" below for the text of a header file that defines the
	ISymbolMap interface.
	
	To create and register custom property pages:
	
	1. Make sure the standard ATL wizard registration template (.rgs) files include
	  a CLSID value under the version-independent ProgID entry, as described in
	  Q167654 question 18. For additional information, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q167654 HOWTO: Visual C++ 5.0 (Professional & Enterprise) Support FAQ
	
	2. Create an ATL project that contains an ATL "Property Page" object (from the
	  "Controls" category in the ATL Object Wizard). See References for more
	  information about creating ATL projects.
	
	3. In this project, implement the Apply method with calls to the Wizard using
	  the ISymbolMap interface.
	
	4. Build the project.
	
	5. Register the page. Copy the file (usually a .dll) to the computer where it
	  will be used, then run "REGSVR32 <proppage path>".
	
	The following code illustrates how to use the ISymbolMap interface:
	
	Sample Code
	-----------
	
	     #include "atlbase.h" // For smart pointer definitions.
	     #include "SymMap.h"  // Text for SymMap.h is in this article--see below.
	
	     HRESULT MyPropPage::Apply(void)
	     {
	        for (UINT i = 0; i < m_nObjects; i++)
	        {
	           CComQIPtr<ISymbolMap, &__uuidof(ISymbolMap)>
	                          pSymMap( m_ppUnk[i] ); // Use smart pointer
	        /* Equivalent code:
	           ISymbolMap* pSymMap = NULL;
	           m_ppUnk[i]->QueryInterface( &__uuidof(ISymbolMap), (LPVOID
	  *)&pSymMap );
	           ...
	           if (pSymMap != NULL) pSymMap->Release();
	        */ 
	           // Call the ATL Object Wizard.
	           if (pSymMap != NULL)
	           {
	              // pSymMap->...
	           }
	        }
	        m_bDirty = FALSE;
	        return S_OK;
	     };
	
	ISymbolMap defines the following methods, in addition to the standard IUnknown
	methods:
	
	- Set: Adds the symbol string pair to the internal map of the wizard:
	
	     HRESULT Set(/* [in] */ LPCOLESTR strSymbol,
	                 /* [in] */ LPCOLESTR strValue);
	
	  Returns S_OK
	
	- Get: Retrieves the value associated with the specified symbol. If the call is
	  successful, pstrValue will point to a BSTR which is allocated using
	  SysAllocString. The caller should free this string using SysFreeString.
	
	     HRESULT Get(/* [in] */ LPCOLESTR strSymbol,
	                 /* [retval][out] */ BSTR *pstrValue);
	
	  Returns S_OK if the symbol exists; E_FAIL otherwise
	
	- Clear: Clears the wizard's internal map of all symbols.
	
	     HRESULT Clear(void);
	
	  Returns S_OK
	
	- SetStatus: Allows individual property pages to enable/disable the OK button
	  so the user can accept the page; use when the OK button should be disabled
	  until the user has entered required values.
	
	     HRESULT SetStatus(/* [in] */ const CLSID *pclsid,
	                       /* [in] */ BOOL bEnableOK);
	
	     pclsid: pointer to CLSID of property page calling this method
	     bEnableOK: TRUE enables the OK button; FALSE disables
	
	  Returns S_OK
	
	Create a Custom ATL Object Template
	-----------------------------------
	
	An ATL object template is a set of files that include (at a minimum) a C++
	implementation (.cpp) file, a corresponding header (.h) file to define the
	object's interface, as well as a registrar script (.rgs) file used to set up the
	object into a system's registry (see References for information on creating
	registrar scripts). Though these files are similar to standard C++ source files,
	they become templates with the addition of symbols and directives. The Wizard
	replaces the symbols with text that the control script (.ctl file) specifies or
	collects, creating new source files for the object being inserted. Directives
	control how the Wizard generates text into the current project. To indicate
	symbols and directives, put brackets around them and lead them with an
	exclamation mark, as follows:
	
	  [!<symbol>] or [!<directive>]
	
	For example, if the script sets a symbol named "MySymbol" to "Subst Text", the
	Wizard replaces "[!MySymbol]" with "Subst Text" wherever it occurs in the
	template files. Examine the .cpp, .h and .rgs files in "<DevStudio
	path>\SharedIde\Template\atl" for examples of ATL object templates.
	
	Directives are reserved words that control text generation into the current
	project. The table below lists directives that may be used in a template file.
	Symbols referenced inside directives have no special marking. Directives and
	symbols are case-sensitive. This example uses directives to add a blank line to
	the current output file if the symbol "MySymbol" has been set to "BlankMe";
	otherwise, they add a comment:
	
	  [!if=(MySymbol, "BlankMe")]
	  [!crlf]
	  [!else]
	  // Here is a comment, instead
	  [!endif]
	
	Directives Used in ATL Object Template Files
	--------------------------------------------
	
	  Directive*     Effect
	  ------------------------------------------------------------------------
	  crlf           Inserts a new line in the output file
	  if(<SYMBOL>)   If <SYMBOL> exists in Wizard's symbol map, uses following
	                 directives and output; value of the symbol is irrelevant
	  if!(<SYMBOL>)  If <SYMBOL> does not exist in Wizard's symbol map, uses
	                 following directives and output; symbol value is ignored
	if=(<SYMBOL>, <value>)
	                 If <SYMBOL> exists and its setting matches <value>
	                 exactly, uses following directives and output
	  if!=(<SYMBOL>, <value>)
	                 If <SYMBOL> does not exist or its setting does not match
	                 <value> exactly, uses following directives and output
	  else           When an [!if...] tests false, uses following directives
	                 and output instead
	  endif          Marks the end of scope of an [!if...] and optional [else]
	  outputoff      Halts adding to output file until [!outputon]
	  outputon       Resumes adding to output file after [!outputoff]
	  
	     * In this table, <SYMBOL> denotes a symbol name and <value> denotes text
	    enclosed in double-quotes.
	  
	
	
	The following tables list some standard symbols and describe how they get their
	values. The Template.txt file documents more symbols and their explanations.
	Symbol names are case-sensitive.
	
	Symbols Set by the Wizard Prior to Processing the Control Script
	----------------------------------------------------------------
	
	  Symbol              Predefined Value
	  --------------------------------------------------------
	  ConnectionPointInterface
	                      "NULL"
	  GalleryPath         String specifying location of \Template\Atl
	  LibGUID             GUID of the typelib in the project's .IDL file
	  LibName             Name of the typelib in the project's .IDL file
	  ProjectAppID        If EXE project, its local server AppId; else not set
	  ProjectName         Name of the current project
	  ProjectNameCPP      Name of the project's main .cpp file
	  ProjectNameHeader   Name of the project's header (.h) file
	  ProjectNameRC       Name of the project's resource (RC) file
	  ProjectNameSafe     Project name stripped of characters invalid for
	                      identifiers
	  ProjectType         Type of project: "EXE" or "DLL"
	
	Symbols Set by User in "Names" Property Page Fields
	---------------------------------------------------
	
	  Symbol         Field Name in "Names"
	  -------------------------------------------------------------------
	  ClassName      "Class"
	  CoClassName    "CoClass"
	  CPPName        ".CPP File"
	  HeaderName     ".H File"
	  InterfaceName  "Interface"
	  ObjectGUID     None - a new GUID is generated and its value is used
	  ProgID         "ProgID" with .1 appended
	  ShortName      "Short Name"
	  TypeName       "Type"
	  VersionIndependentProgID
	                 "ProgId"
					
	
	Create an ATL Object Wizard Control Script (.CTL) File
	------------------------------------------------------
	
	The control script (.CTL file) specifies symbol values implicitly or collects
	them during user property page dialog boxes. It directs the Wizard to create or
	update various project files to create the ATL object. As with template files,
	control script directives have a leading exclamation mark and surrounding
	brackets, as follows:
	
	  [!<directive>]
	
	Symbols used inside directives have no special marking. Examine the .ctl files in
	\Template\atl, such as "Addin.ctl," for examples of control scripts.
	
	The Wizard processes the control script directives sequentially. The table below
	lists the directives used in control scripts. Here is a simple script that opens
	the "Names" dialog box, creates a header file based on the "Addin.h" template,
	and adds it to the current project:
	
	  [!Dialog("Names")]
	  [!strcpy(UpperShortName, ShortName)]
	  [!toupper(UpperShortName)]
	  [!AddStringToSymbol(HeaderTemplate, GalleryPath, "Addin.h")]
	  [!target(HeaderName)]
	  [!include(HeaderTemplate)]
	  [!target()]
	  [!AddFileToProject(HeaderName)]
	
	Directives Used in ATL Object Wizard Control Script Files
	---------------------------------------------------------
	
	This is a list of directives used by Visual C++ 5.0. The Template.txt file
	documents more directives recognized by Visual C++ 6.0 and their explanations.
	
	  Directive*     Effect
	  ----------------------------------------------------------------------
	  AddCoClassToIDL(<IDLFILE>, <FILENAME>)
	                 Adds contents of <FILENAME> to <IDLFILE>, assuming that
	                 the contents are a CoClass specification
	  AddFileToProject(<FILENAME>)
	                 Adds <FILENAME> to the project with default build
	                 settings
	  AddImportFile(<IDLFILE>, <value>)
	                 Inserts an import statement line to <IDLFILE>, with
	                 <value> appended as the import specifier; inserts after
	                 any existing import statements in <IDLFILE>
	  AddIncludeFile(<FILENAME>, <DIRECTIVE>)
	                 Inserts a #include preprocessor directive to <FILENAME>,
	                 with <DIRECTIVE> specifying the text following
	                 "#include"; inserts after any existing #include
	                 directives in <FILENAME>
	  AddInterfaceToIDL(<IDLFILE>, <FILENAME>)
	                 Adds contents of <FILENAME> to <IDLFILE>, assuming that
	                 the contents are an Interface specification
	  AddRegistryToRC(<RGSFILE>, <RESOURCE_ID>)
	                 Adds <RGSFILE> into the resources as type REGISTRY with
	                 the ID <RESOURCE_ID>
	  AddResourceFromFile(<FILENAME>, <RESOURCE_ID>, <RESOURCETYPE>)
	                 Adds contents of <FILENAME> to the project resource (.RC)
	                 file as resource type <RESOURCETYPE> with ID
	                 <RESOURCE_ID>
	  AddStringResource(<STRING_ID>, <SYMBOL>)
	                 Adds a string resource with ID <STRING_ID> to the project
	                 resource (.RC) file; <SYMBOL> specifies the string's
	                 value
	  AddStringToSymbol(<SYMBOL1>, <SYMBOL2>, <value>)
	                 Sets in <SYMBOL1> the result of appending <value> to
	                 <SYMBOL2>
	  AddSymbolToString(<SYMBOL>, <value>)
	                 Sets in <SYMBOL> the result of appending <value> to
	                 <SYMBOL>
	  AddToObjectMap(<COCLASSNAME>, <CLASSNAME>)
	                 Associates <COCLASSNAME> with <CLASSNAME> in the
	                 project's object map
	  CopyFile(<FILENAME1>, <FILENAME2>)
	                 Copies existing <FILENAME1> to a new <FILENAME2>
	  DeleteFile(<FILENAME>)
	                 Deletes <FILENAME>
	  Dialog(<dialog1_progid>[, <dialog2_progid>[, ...]])
	                 Displays property page dialogs to make symbol settings;
	                 the control script uses the symbols to customize
	                 templates for the object being inserted.  Each
	                 <dialogX_progid> is the ProgID of a registered property
	                 page, up to a maximum of 9 pages per directive.  Please
	                 refer to the section on property pages for information
	                 about registering property pages and communicating with
	                 the wizard from the property page.
	  DoubleSlash(<SYMBOL>)
	                 Adds a '\' after each existing '\' in <SYMBOL>
	  GetTemporaryFileName(<FILENAME>)
	                 Creates a temporary file and sets its name in <FILENAME>
	  include(<TEMPLATE>)
	                 Processes template file <TEMPLATE>; output goes to the
	                 file specified in a previous [!target(<FILENAME>)]
	  newguid(<SYMBOL>)
	                 Sets <SYMBOL> to a newly created GUID
	  set(<SYMBOL>, <value>)
	                 Sets <SYMBOL> to <value>; creates <SYMBOL> if it doesn't
	                 already exist
	  strcpy(<SYMBOL1>, <SYMBOL2>)
	                 Copies the string <SYMBOL2> to <SYMBOL1>
	  target(<FILENAME>)
	                 Opens <FILENAME> as the current output file; follow with
	                 [!include(...)] directives or literal text to send to
	                 output file
	  target()       Closes the output file; output to file now halted
	  tolower(<SYMBOL>)
	                 Converts <SYMBOL> to lowercase
	  toupper(<SYMBOL>)
	                 Converts <SYMBOL> to uppercase
	
	  * In this table, uppercase names enclosed in <> (e.g. <SYMBOL>) denotes
	    a symbol name; lowercase names enclosed in <> (e.g. <value>) denotes
	    text enclosed in double-quotes.
	
	Register the Custom ATL Object with the ATL Object Wizard
	---------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Under the registry key:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\DevStudio\ATLWizard\ 
	
	add a new key whose name is a GUID. This GUID is not associated with anything
	else--it is only used to uniquely identify each ATL object available to the ATL
	Object Wizard. The Visual C++ utility Guidgen.exe creates new GUIDs. A GUID has
	this format:
	
	  {6E871954-50AD-11D0-883E-080000185165}
	
	Under this GUID key, add the following string values, replacing the value data
	with appropriate text as described below:
	
	  Value Name  Value Data
	  ----------------------------------------
	  Category    REG_SZ "<Category>"
	  Control     REG_SZ "<Control File Name>"
	  Icon        REG_SZ "<Icon File Name>"
	  Name        REG_SZ "<Object Name>"
	
	- Category: the category name under which this object should appear.
	
	- Control: name of the object's control script file (without a path). It is
	  normally a .ctl file. The Wizard looks for the control script file in
	  "<DevStudio path>\SharedIde\Template\atl".
	
	- Icon: name of an icon file containing the icon for this object. It is
	  normally a .ICO file. The Wizard looks for the icon file in "<DevStudio
	  path>\SharedIde\Template\atl".
	
	- Name: a name used to identify the object in the ATL Object Wizard.
	
	ISymbolMap Interface Definition for C/C++
	-----------------------------------------
	
	Save the following code into a header file named "SymMap.h" and "#include" it
	with custom property page source files:
	
	Sample Code
	-----------
	
	     #ifdef __cplusplus
	     extern "C"{
	     #endif
	
	     /* Forward Declarations */ 
	
	     #ifndef __ISymbolMap_FWD_DEFINED__
	     #define __ISymbolMap_FWD_DEFINED__
	     typedef interface ISymbolMap ISymbolMap;
	     #endif    /* __ISymbolMap_FWD_DEFINED__ */ 
	
	     #ifndef __ISymbolMap_INTERFACE_DEFINED__
	     #define __ISymbolMap_INTERFACE_DEFINED__
	
	     EXTERN_C const IID IID_ISymbolMap;
	
	     #if defined(__cplusplus) && !defined(CINTERFACE)
	
	        interface DECLSPEC_UUID("C6D58201-1FA3-11D0-BF1E-0000E8D0D146")
	        ISymbolMap : public IUnknown
	
	        {
	        public:
	           virtual HRESULT STDMETHODCALLTYPE Set(
	              /* [in] */ LPCOLESTR strSymbol,
	              /* [in] */ LPCOLESTR strValue) = 0;
	
	           virtual HRESULT STDMETHODCALLTYPE Get(
	              /* [in] */ LPCOLESTR strSymbol,
	              /* [retval][out] */ BSTR __RPC_FAR *pstrValue) = 0;
	
	           virtual HRESULT STDMETHODCALLTYPE Clear( void) = 0;
	
	           virtual HRESULT STDMETHODCALLTYPE SetStatus(
	              const CLSID __RPC_FAR *pclsid,
	              BOOL bEnableOK) = 0;
	        };
	
	     #else    /* C style interface */ 
	
	        typedef struct ISymbolMapVtbl
	        {
	           BEGIN_INTERFACE
	
	           HRESULT ( STDMETHODCALLTYPE __RPC_FAR *QueryInterface )(
	              ISymbolMap __RPC_FAR * This,
	              /* [in] */ REFIID riid,
	              /* [iid_is][out] */ void __RPC_FAR *__RPC_FAR *ppvObject);
	
	           ULONG ( STDMETHODCALLTYPE __RPC_FAR *AddRef )(
	              ISymbolMap __RPC_FAR * This);
	
	           ULONG ( STDMETHODCALLTYPE __RPC_FAR *Release )(
	              ISymbolMap __RPC_FAR * This);
	
	           HRESULT ( STDMETHODCALLTYPE __RPC_FAR *Set )(
	              ISymbolMap __RPC_FAR * This,
	              /* [in] */ LPCOLESTR strSymbol,
	              /* [in] */ LPCOLESTR strValue);
	
	           HRESULT ( STDMETHODCALLTYPE __RPC_FAR *Get )(
	              ISymbolMap __RPC_FAR * This,
	              /* [in] */ LPCOLESTR strSymbol,
	              /* [retval][out] */ BSTR __RPC_FAR *pstrValue);
	
	           HRESULT ( STDMETHODCALLTYPE __RPC_FAR *Clear )(
	              ISymbolMap __RPC_FAR * This);
	
	           HRESULT ( STDMETHODCALLTYPE __RPC_FAR *SetStatus )(
	              ISymbolMap __RPC_FAR * This,
	              const CLSID __RPC_FAR *pclsid,
	              BOOL bEnableOK);
	
	           END_INTERFACE
	        } ISymbolMapVtbl;
	
	        interface ISymbolMap
	        {
	           CONST_VTBL struct ISymbolMapVtbl __RPC_FAR *lpVtbl;
	        };
	
	     #ifdef COBJMACROS
	
	     #define ISymbolMap_QueryInterface(This,riid,ppvObject) \ 
	        (This)->lpVtbl -> QueryInterface(This,riid,ppvObject)
	
	     #define ISymbolMap_AddRef(This) \ 
	        (This)->lpVtbl -> AddRef(This)
	
	     #define ISymbolMap_Release(This) \ 
	        (This)->lpVtbl -> Release(This)
	
	     #define ISymbolMap_Set(This,strSymbol,strValue) \ 
	        (This)->lpVtbl -> Set(This,strSymbol,strValue)
	
	     #define ISymbolMap_Get(This,strSymbol,pstrValue) \ 
	        (This)->lpVtbl -> Get(This,strSymbol,pstrValue)
	
	     #define ISymbolMap_Clear(This) \ 
	        (This)->lpVtbl -> Clear(This)
	
	     #define ISymbolMap_SetStatus(This,pclsid,bEnableOK) \ 
	        (This)->lpVtbl -> SetStatus(This,pclsid,bEnableOK)
	
	     #endif /* COBJMACROS */ 
	
	     #endif    /* C style interface */ 
	
	     HRESULT STDMETHODCALLTYPE ISymbolMap_Set_Proxy(
	        ISymbolMap __RPC_FAR * This,
	        /* [in] */ LPCOLESTR strSymbol,
	        /* [in] */ LPCOLESTR strValue);
	
	     void __RPC_STUB ISymbolMap_Set_Stub(
	        IRpcStubBuffer *This,
	        IRpcChannelBuffer *_pRpcChannelBuffer,
	        PRPC_MESSAGE _pRpcMessage,
	        DWORD *_pdwStubPhase);
	
	     HRESULT STDMETHODCALLTYPE ISymbolMap_Get_Proxy(
	        ISymbolMap __RPC_FAR * This,
	        /* [in] */ LPCOLESTR strSymbol,
	        /* [retval][out] */ BSTR __RPC_FAR *pstrValue);
	
	     void __RPC_STUB ISymbolMap_Get_Stub(
	        IRpcStubBuffer *This,
	        IRpcChannelBuffer *_pRpcChannelBuffer,
	        PRPC_MESSAGE _pRpcMessage,
	        DWORD *_pdwStubPhase);
	
	     HRESULT STDMETHODCALLTYPE ISymbolMap_Clear_Proxy(
	        ISymbolMap __RPC_FAR * This);
	
	     void __RPC_STUB ISymbolMap_Clear_Stub(
	        IRpcStubBuffer *This,
	        IRpcChannelBuffer *_pRpcChannelBuffer,
	        PRPC_MESSAGE _pRpcMessage,
	        DWORD *_pdwStubPhase);
	
	     HRESULT STDMETHODCALLTYPE ISymbolMap_SetStatus_Proxy(
	        ISymbolMap __RPC_FAR * This,
	        const CLSID __RPC_FAR *pclsid,
	        BOOL bEnableOK);
	
	     void __RPC_STUB ISymbolMap_SetStatus_Stub(
	        IRpcStubBuffer *This,
	        IRpcChannelBuffer *_pRpcChannelBuffer,
	        PRPC_MESSAGE _pRpcMessage,
	        DWORD *_pdwStubPhase);
	
	     #endif    /* __ISymbolMap_INTERFACE_DEFINED__ */ 
	
	     #ifdef __cplusplus
	     }
	     #endif
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Developer Products; Visual C++; C/C++ Language and C++
	Libraries; Active Template Library; Articles; Creating an ATL Project
	
	Visual C++ Books Online: Developer Products; Visual C++; C/C++ Language and C++
	Libraries; Active Template Library; Articles; Creating an ATL Project Adding;
	Objects and Controls
	
	Visual C++ Books Online: Platform, SDK and DDK Documentation; Platform SDK; COM
	and ActiveX Object Services; COM; Reference; Interfaces; IPropertyPage
	
	Visual C++ Books Online: Developer Products; Visual C++; C/C++ Language and C++
	Libraries; Active Template Library; Articles; The ATL Registry Component
	(Registrar); Creating Registrar Scripts
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbATL200 kbATL210 kbAutomation kbide kbVC500 kbVC600 kbATL300 MSGRAPH kbATL100 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :1.0,1.1,2.0,2.1,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

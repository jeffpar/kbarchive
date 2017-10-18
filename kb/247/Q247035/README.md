---
layout: page
title: "Q247035: HOWTO: Automate Visual C++"
permalink: kb/247/Q247035/
---

## Q247035: HOWTO: Automate Visual C++

	Article: Q247035
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbide kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbGrpDSTools
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Developer Studio object model introduced with Visual C++ 5.0 provides COM
	objects for automation. The objects are manipulated using methods, properties,
	and events associated with the objects. You can automate tasks in the Visual C++
	environment using these objects.
	
	This article provides sample code that utilizes two different approaches to
	automating Visual C++. The first method uses #include to include Visual C++
	automation header files and the second method uses #import to import Visual C++
	type libraries.
	
	The sample code provided in the "More Information" section does the following:
	
	1. Launches Visual C++.
	
	2. Opens a workspace that you have specified on the command line.
	
	3. Enumerates all the projects in the workspace and displays their names.
	
	4. Enumerates all the configurations of individual projects in the workspace and
	  displays their names.
	
	5. Builds all the projects in all their configurations.
	
	6. Displays the active project name.
	
	7. Quits Visual C++.
	
	NOTE: The sample code provided in the following sections is not supported by
	Microsoft.
	
	MORE INFORMATION
	================
	
	Visual C++ Automation Using #include
	------------------------------------
	
	1. Using the "Win32 Console Application" AppWizard, create a new "Hello World"
	  project named "VCAutomationMethod1" (without the quotation marks).
	
	2. Open the generated VCAutomationMethod1.cpp and add the following code after
	  #include "stdafx.h" and before the main() function:
	
	  #include<stdio.h>
	
	  //These are required for creating com components, CComPtr, CComBSTR, CComPtr 
	  //and CComQIPtr.
	
	  #include<atlbase.h>
	  extern CComModule _Module;
	  #include <atlcom.h>
	  #include <initguid.h>
	  #include<comdef.h>
	
	  /*The following header files are used for these objects:
	
	  1. Application
	  2. Document
	  3. Documents
	  4. Window
	  5. Windows
	
	  */ 
	
	  #include <ObjModel\appauto.h>
	  #include <ObjModel\appdefs.h>
	  #include <ObjModel\appguid.h>
	
	  /*The following header files are used for these objects:
	
	  1. BuildProject
	  2. Configuration
	  3. Configurations
	  4. Project
	  5. Projects
	
	  */ 
	
	  #include <ObjModel\bldauto.h>
	  #include <ObjModel\bldguid.h>
	  #include <ObjModel\blddefs.h>
	
	  /*The following header files are used for these objects:
	
	  1. TextDocument
	  2. TextEditor
	  3. TextSelection
	  4. TextWindow
	
	  */ 
	
	  #include <ObjModel\textauto.h>
	  #include <ObjModel\textguid.h>
	  #include <ObjModel\textdefs.h>
	
	  /*The following header files are used for these objects:
	
	  1. Breakpoint
	  2. Breakpoints
	  3. Debugger
	
	  */ 
	
	  #include <ObjModel\dbgauto.h>
	  #include <ObjModel\dbgguid.h>
	  #include <ObjModel\dbgdefs.h>
	
	3. Replace the entire main() function with the following code:
	
	  IApplication *pApp;
	
	  //Initialize COM and VC++
	  BOOL InitializeCOMandVC()
	  {
	  	//Initialize COM libraries
	  	HRESULT hr = CoInitialize(NULL);
	          if(FAILED(hr))
	          {
	  		printf("Failed to initialize the COM libraries\n");
	  		return FALSE;
	  	}
	
	  	//Obtain the IApplication pointer
	  	hr = CoCreateInstance(CLSID_Application, NULL, CLSCTX_LOCAL_SERVER, IID_IApplication, (void**)&pApp);
	  	if(FAILED(hr))
	  	{
	  		printf("Failed to create an instance of MSDEV\n");
	                  CoUninitialize();
	  		return FALSE;
	  	}
	
	  	return TRUE;
	  }
	
	  //Uninitialize COM and VC++
	  void UnInitializeCOMandVC()
	  {
	  	//Quit from Visual C++
	  	pApp->Quit();
	  	pApp=NULL;
	  	//Uninitialize COM libraries
	  	CoUninitialize();
	  }
	
	  BOOL PerformTask(char workspace_name[])
	  {
	  	HRESULT hr;
	
	  	//Set the visibility of MSDEV to TRUE
	  	VARIANT_BOOL visibility=VARIANT_TRUE;
	  	hr = pApp->put_Visible(visibility);
	  	if(FAILED(hr))
	  	{
	  		printf("Failed to set visibility of MSDEV\n");
	                  //Uninitialize COM libraries and quit from Visual C++
	  		UnInitializeCOMandVC();
	  		return FALSE;
	  	}
	
	  	CComPtr<IDispatch> iDisp=NULL;
	
	  	//Obtain the IDocuments pointer using smart pointer classes
	  	pApp->get_Documents(&iDisp);
	  	CComQIPtr<IDocuments, &IID_IDocuments> pDocs(iDisp);
	
	  	//Open the workspace passed as the command line argument
	  	CComBSTR fname(workspace_name);
	  	CComVariant type="Auto";
	  	CComVariant read="False";
	  	iDisp=NULL;
	  	hr = pDocs->Open(fname,type,read,&iDisp);
	  	if(FAILED(hr))
	  	{
	  		printf("Failed to open the workspace: %s\n",workspace_name);
	                  //Uninitialize COM libraries and quit from Visual C++
	  		UnInitializeCOMandVC();
	  		return FALSE;
	  	}
	
	  	//Obtain the IProjects pointer using smart pointer classes
	  	iDisp=NULL;
	  	pApp->get_Projects(&iDisp);
	  	CComQIPtr<IProjects, &IID_IProjects> pProjects(iDisp);
	
	  	//Obtain the number of projects in the workspace
	  	long count;	
	  	pProjects->get_Count(&count);
	  	printf("Number of projects = %d\n",count);
	
	  	CComVariant index;
	  	//CComVariant conf
	  	CComPtr<IGenericProject> pProject;
	  	CComQIPtr<IBuildProject, &IID_IBuildProject> pBldProject;
	  	CComPtr<IConfigurations> pConfigs;
	  	CComPtr<IConfiguration> pConfig;
	  	long numconfigs;
	  	CComBSTR projname;
	  	CComBSTR configname;
	  	CComBSTR projtype;
	  	_bstr_t temp;
	
	  	//The outer loop will enumerate projects
	  	for(int i=1; i <= count; i++)
	  	{
	  		index=i;
	  		//Obtain the IGenericProject pointer
	  		pProjects->Item(index, &pProject);
	  		//Obtain the IBuildProject pointer
	  		pBldProject=pProject;
	  		//Print the name of the project
	  		pProject->get_Name(&projname);
	  		temp=projname.m_str;
	  		printf("Project name %s\n",(char *) temp);
	  		//Obtain the IConfigurations pointer
	  		pBldProject->get_Configurations(&pConfigs);		
	  		//Obtain the number of configurations for the project
	  		pConfigs->get_Count(&numconfigs);
	  		printf("Number of configurations = %d\n",numconfigs);
	
	  		//Obtain the project type
	  		pBldProject->get_Type(&projtype);
	
	  		//The inner loop will enumerate configurations of the individual projects
	  		for(int j=1; j <= numconfigs; j++)
	  		{
	  			index=j;
	  			//Obtain the IConfiguration pointer
	  			pConfigs->Item(index, &pConfig);
	  			//Print the name of the configuration
	  	 		pConfig->get_Name(&configname);
	  			temp=configname.m_str;
	  			printf("Configuration name %s\n",(char *) temp);
	
	  			//If the project is buildable then build it
	  			if(projtype == "Build")
	  			{
	  				printf("Building the project\n");
	  				CComVariant VarDisp = pConfig;
	  				pApp->Build(VarDisp);
	  			}
	  			pConfig=NULL;
	  		}
	  		pConfigs=NULL;
	  		pProject=NULL;
	  	}
	
	  	//Obtain the active project and display the name
	  	iDisp=NULL;
	  	pApp->get_ActiveProject(&iDisp);
	  	CComQIPtr<IGenericProject, &IID_IGenericProject> pActiveProj(iDisp);
	  	iDisp=NULL;
	
	  	pActiveProj->get_Name(&projname);
	  	temp=projname.m_str;
	  	printf("Active Project name %s\n",(char *) temp);
	
	  	return TRUE;
	  }
	
	  int main(int argc, char* argv[])
	  {
	  	if(argc != 2)
	  	{
	  		printf("USAGE: VCAutomationMethod1.exe <workspace name>\n");
	  		return 0;
	  	}
	
	      // does the workspace file exist ?
	      if( -1 == GetFileAttributes((LPCTSTR)argv[1]) )
	  	{
	  		LPVOID lpMsgBuf;
	  		FormatMessage( 
	  			FORMAT_MESSAGE_ALLOCATE_BUFFER | 
	  			FORMAT_MESSAGE_FROM_SYSTEM | 
	  			FORMAT_MESSAGE_IGNORE_INSERTS,
	  			NULL,
	  			GetLastError(),
	  			MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT), // Default language
	  			(LPTSTR) &lpMsgBuf,
	  			0,
	  			NULL 
	  			);
	  		printf("%s:%s\n",argv[1],(LPCTSTR)lpMsgBuf);
	  		// Free the buffer.
	  		LocalFree( lpMsgBuf );
	     		return 0;
	  	}
	
	  	//Initialize COM libraries and create an instance of IApplication
	  	if(InitializeCOMandVC() == FALSE)
	  		return 0;
	
	  	//Perform the designated task
	  	if(PerformTask(argv[1]) == FALSE)
	  	{
	  		printf("An error has occurred\n");
	  		return 0;
	  	}
	  	else
	  		printf("The task completed successfully\n");
	
	  	//Uninitialize COM libraries and quit from Visual C++
	  	UnInitializeCOMandVC();
	
	  	return 0;
	  }
	
	4. Select Build VCAutomationMethod1.exe from the Build menu to create the
	  executable.
	
	Visual C++ Automation Using #import
	-----------------------------------
	
	1. Using the "Win32 Console Application" AppWizard, create a new "Hello World"
	  project named "VCAutomationMethod2" (without the quotation marks).
	
	2. Open the generated VCAutomationMethod2.cpp and add the following code after
	  #include "stdafx.h" and before the main() function:
	
	  #include<stdio.h>
	
	  //These are required for creating com components, CComPtr, CComBSTR, CComPtr 
	  //and CComQIPtr.
	
	  #include<atlbase.h>
	  extern CComModule _Module;
	  #include <atlcom.h>
	  #include <initguid.h>
	  #include<comdef.h>
	
	  #import<devshl.dll>
	  using namespace DSSharedObjects;
	
	  #import<devedit.pkg>
	  using namespace DSTextEditor;
	
	  #import<ide\devbld.pkg>
	  using namespace DSProjectSystem;
	
	  #import<ide\devdbg.pkg>
	  using namespace DSDebugger;
	
	3. Replace the entire main() function with the following code:
	
	  DSSharedObjects::IApplicationPtr pApp;
	
	  //Initialize COM and VC++
	  BOOL InitializeCOMandVC()
	  {
	  	HRESULT hr = CoInitialize(NULL);
	      if(FAILED(hr))
	      {
	          printf("Failed to initialize the COM libraries\n");
	  		return FALSE;
	  	}
	  	//Obtain the IApplication pointer
	  	hr=pApp.CreateInstance("MSDEV.Application");
	
	  	if(FAILED(hr))
	  	{
	  		printf("Failed to create an instance of MSDEV");
	          CoUninitialize();
	  		return FALSE;
	  	}
	  	return TRUE;
	  }
	
	  //Uninitialize COM and VC++
	  void UnInitializeCOMandVC()
	  {
	  	//Quit from MSDEV
	  	pApp->Quit();
	  	pApp=NULL;
	  	//Uninitialize COM libraries
	  	CoUninitialize();
	  }
	
	  BOOL PerformTask(char workspace_name[])
	  {
	  	DSSharedObjects::IProjectsPtr pProjects;
	  	DSSharedObjects::IGenericProjectPtr pProject;
	  	DSSharedObjects::IGenericProjectPtr pActiveProject;
	  	DSProjectSystem::IBuildProjectPtr pBldProject;
	  	DSProjectSystem::IConfigurationsPtr pConfigs;
	  	DSProjectSystem::IConfigurationPtr pConfig;
	  	DSSharedObjects::IDocumentsPtr pDocs;
	
	  	HRESULT hr;
	  	//Set the visibility of MSDEV to TRUE
	  	pApp->Visible=VARIANT_TRUE;
	  	
	  	//Open the workspace passed as the command line argument
	  	pDocs=pApp->Documents;
	  	_bstr_t fname(workspace_name);
	  	CComVariant type="Auto";
	  	CComVariant read="False";
	  	hr = pDocs->Open(fname,type,read);
	  	if(FAILED(hr))
	  	{
	  		printf("Failed to open the workspace: %s\n",workspace_name);
	  		//Uninitialize COM libraries and quit from Visual C++
	                  UnInitializeCOMandVC();
	  		return FALSE;
	  	}
	
	  	//Obtain the IProjects pointer using smart pointers
	  	pProjects=pApp->Projects;
	
	  	//Obtain the number of projects in the workspace
	  	long count;	
	  	count=pProjects->Count;
	  	printf("Number of projects = %d\n",count);
	
	  	CComVariant index;
	
	  	_bstr_t projtype;
	  	_bstr_t projname;
	  	_bstr_t configname;
	  	long numconfigs;
	
	  	//The outer loop will enumerate projects
	  	for(int i=1; i <= count; i++)
	  	{
	  		index=i;
	  		//Obtain the IGenericProject pointer
	  		pProject=pProjects->Item(index);
	  		//Obtain the IBuildProject pointer
	  		pBldProject=pProject;
	  		//Print the name of the project
	  		projname=pProject->Name;
	  		printf("Project name %s\n",(char *) projname);
	  		//Obtain the IConfigurations pointer
	  		pConfigs=pBldProject->Configurations;		
	  		//Obtain the number of configurations for the project
	  		numconfigs=pConfigs->Count;
	  		printf("Number of configurations = %d\n",numconfigs);
	
	  		//Obtain the project type
	  		projtype=pProject->Type;
	
	  		//The inner loop will enumerate configurations of the individual projects
	  		for(int j=1; j <= numconfigs; j++)
	  		{
	  			index=j;
	  			//Obtain the IConfiguration pointer
	  			pConfig=pConfigs->Item(index);
	  			//Print the name of the configuration
	  	 		configname=pConfig->Name;
	  			printf("Configuration name %s\n",(char *) configname);
	
	  			//If the project is buildable then build it
	  			if(!strcmp((char *)projtype, "Build"))
	  			{
	  				printf("Building the project\n");
	  				//Pass the IConfiguration pointer to Build
	  				pApp->Build(pConfig.GetInterfacePtr());
	  			}
	  		}
	  	}
	
	  	//Obtain the active project and display the name
	  	pActiveProject=pApp->ActiveProject;
	  	projname=pActiveProject->Name;
	  	printf("Active Project name %s\n",(char *) projname);
	
	  	return TRUE;
	  }
	
	  int main(int argc, char* argv[])
	  {
	  	if(argc != 2)
	  	{
	  		printf("USAGE: VCAutomationMethod2.exe <workspace name>\n");
	  		return 0;
	  	}
	
	  	// does the workspace file exist ?
	      if( -1 == GetFileAttributes((LPCTSTR)argv[1]) )
	  	{
	  		LPVOID lpMsgBuf;
	  		FormatMessage( 
	  			FORMAT_MESSAGE_ALLOCATE_BUFFER | 
	  			FORMAT_MESSAGE_FROM_SYSTEM | 
	  			FORMAT_MESSAGE_IGNORE_INSERTS,
	  			NULL,
	  			GetLastError(),
	  			MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT), // Default language
	  			(LPTSTR) &lpMsgBuf,
	  			0,
	  			NULL 
	  			);
	  			printf("%s:%s\n",argv[1],(LPCTSTR)lpMsgBuf);
	  			// Free the buffer.
	  			LocalFree( lpMsgBuf );
	     			return 0;
	  	}
	
	  	//Initialize COM libraries and create an instance of IApplication
	  	if(InitializeCOMandVC() == FALSE)
	  		return 0;
	
	  	//Perform the designated task
	  	if(PerformTask(argv[1]) == FALSE)
	  	{
	  		printf("An error has occurred\n");
	  		return 0;
	  	}
	  	else
	  		printf("The task completed successfully\n");
	
	  	//Uninitialize COM libraries and quit from Visual C++
	  	UnInitializeCOMandVC();
	
	  	return 0;
	  }
	
	4. Select Build VCAutomationMethod2.exe from the Build menu to create the
	  executable.
	
	This automation code will execute to completion only if no message boxes are
	displayed by Visual C++. So, before you start using the executables, you may
	want to take the following precautions:
	
	- Disable "Tip of the Day": Select Tip of the Day from the Help menu, clear
	  Show tips at startup, and click Close.
	
	- Open your workspace at least once to ensure that Visual C++ doesn't display
	  message boxes.
	
	REFERENCES
	==========
	
	MSDN Library:
	
	  Visual Studio 6.0 Documentation; Visual C++ Documentation; Using Visual C++;
	  Visual C++ User's Guide; Automating Tasks in Visual C++; Developer Studio
	  Objects
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q200074 BUG: Can't Get IBuildProject Interface From Developer Studio
	
	  Q192912 PRB: MSDev Doesn't Close When COM Reference Count Is Zero
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbide kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

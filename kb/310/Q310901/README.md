---
layout: page
title: "Q310901: HOW TO: Use Project Hook to Recycle IIS to Rebuild VFP COM DLL"
permalink: kb/310/Q310901/
---

## Q310901: HOW TO: Use Project Hook to Recycle IIS to Rebuild VFP COM DLL

	Article: Q310901
	Product(s): Microsoft FoxPro
	Version(s): 4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbAPI kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 6.0, 7.0 
	- Microsoft Internet Information Server versions 4.0, 5.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Use a Project Hook to Recycle IIS So That VFP COM DLL Can Be Rebuilt
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article demonstrates how to release a Visual FoxPro (VFP) COM
	DLL that is in use by Microsoft Internet Information Server (IIS) so that it may
	be rebuilt.
	
	By default, IIS does not immediately free dynamic-link libraries (DLLs) after it
	is finished with them. This provides the benefit of increased performance
	because the libraries are not read from disk with each request. The libraries
	are eventually freed, but if you are in the process of developing a VFP DLL for
	use with IIS, you will probably not want to wait to overwrite it. To avoid this
	problem, it is possible to cycle IIS from VFP (thereby freeing your COM DLL)
	when you rebuild your VFP project.
	
	Visual FoxPro 6.0 and 7.0 include the ability to execute code from the Project
	Manager by using a project hook. Specifically, you can use the BeforeBuild()
	event to execute code that will cycle the IIS service on the local (development)
	computer, thereby freeing any used DLLs and allowing them to be overwritten.
	
	Use a Project Hook to Recycle IIS So That VFP COM DLL Can Be Rebuilt
	--------------------------------------------------------------------
	
	1. Open Visual FoxPro 6.0 or 7.0.
	
	2. On the File menu, click New, and then click Class.
	
	3. Fill in the New Class dialog as follows:
	
	  Class name: IISDLL_HOOK
	  Based on: ProjectHook
	  Store in: <Path>\IISDLL_HOOK.VCX (where Path is a directory path of your
	  choosing on your local computer)
	
	4. In the Class Designer, double-click the class to open the code window, and
	  then select BeforeBuild from the procedure drop-down box.
	
	5. Paste the following code in the code window below the "PARAMETERS..."
	  statement.
	
	  NOTE: This code relies on IIS being installed on the same computer as Visual
	  FoxPro. The code will not work with Microsoft Personal Web Server. If you are
	  using Windows 2000 or later, make sure that the Windows\System32 directory is
	  in the system path. To check this, run IISRESET from a command prompt; if it
	  runs successfully, the following project hook code will work as well.
	
	  LPARAMETERS cOutputName, nBuildAction, lRebuildAll, lShowErrors, lBuildNewGuids
	  *-----------------------------------
	  * AUTHOR:    Trevor Hancock (trevorh@Microsoft.com)
	  * CREATED:   Thursday, Oct. 18, 2001
	  * ABSTRACT: This code will cycle IIS on the LOCAL machine running
	  *                 Windows NT, Windows 2000, XP or .NET Server,
	  *                 thereby freeing any used VFP COM DLLs allowing
	  *                 them to be rebuilt. This code does NOT work with
	  *                 Microsoft Personal Web Server. 
	  *-----------------------------------
	  #DEFINE MB_YESNO                 4   && Yes and No buttons
	  #DEFINE MB_ICONQUESTION    32   && Warning query
	  #DEFINE IDYES                       6   && Yes button pressed
	
	  *!* Ask developer if Web server should be cycled.
	  LOCAL lnCycleAnswer AS INTEGER
	  lnCycleAnswer = MESSAGEBOX( ;
	  	"Would you like cycle IIS before building?", ;
	  	MB_YESNO + MB_ICONQUESTION, "Cycle Web Server?")
	  IF lnCycleAnswer # IDYES
	  *!* Exit: they answered "No".
	  	RETURN .F.
	  ENDIF
	
	  WAIT WINDOW "Resetting IIS to free used DLL(s)..." NOWAIT NOCLEAR
	
	  IF ("5.01" $ OS()) OR ("5.00" $ OS()) &&W2K or WXP/.NET
	  	RUN IISRESET
	  ELSE
	  	RUN NET STOP IISADMIN /Y
	  	RUN NET START W3SVC
	  ENDIF
	
	  WAIT CLEAR
	  WAIT WINDOW "Reset complete. Building..." NOWAIT
	   
	
	6. Save the class and then close the Class Designer.
	
	When you attach this project hook to a project, each time the project is built
	you will be prompted to cycle the IIS server on the local computer. If you
	choose to do so, any VFP COM DLLs will be freed, allowing them to be rebuilt.
	
	REFERENCES
	==========
	
	For additional information about programmatically restarting IIS running on a
	remote computer, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q247557 IIS: How to Restart IIS Services by Using WSH with ADSI
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 kbHOWTOmaster 
	Technology        : kbVFPsearch kbiisSearch kbAudDeveloper
	Version           : :4.0,5.0,6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	

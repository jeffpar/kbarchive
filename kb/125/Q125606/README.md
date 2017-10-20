---
layout: page
title: "Q125606: INFO: Password .DLL File That Can Be Called Anywhere in FoxPro"
permalink: /kb/125/Q125606/
---

## Q125606: INFO: Password .DLL File That Can Be Called Anywhere in FoxPro

{% raw %}

	Article: Q125606
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example code how to generate a modal dialog box on top of
	the FoxPro desktop. The structure of code in this article follows the same
	structure shown in the LCK manual -- FoxPro code is given first followed by the
	C code. The C code was compiled using Visual C++ version 1.5.
	
	MORE INFORMATION
	================
	
	The following example creates a .DLL that defines a modal dialog box for
	passwords. This is a generic example where the user can pass both the dialog
	title and the length of the password. The .DLL will return the password to
	FoxPro.
	
	FoxPro Code
	-----------
	
	     CLEAR
	     CLOSE DATABASES
	     PASSWORD=SPACE(50)   && DEFINE THE PASSWORD TO BE
	                          && OF 50 ELEMENTS
	     SET LIBRARY TO SYS(2004)+'FOXTOOLS' && SET THE LIBRARY TO FOXTOOLS
	     FHANDLE=MAINHWND()   && RETURN FOXPRO MAIN SCREEN HANDLE
	     FUNCHANDLE=REGFN("MyInputBox","LC@CI","I","C:\FPW26\PASSWORD.DLL")
	     * THE .DLL TITLE IS "PASSWORD DIALOG"
	     * THE FHANDLE IS THE FOXPRO DESKTOP HANDLE
	     * THE FUNCHANDLE IS A HANDLE TO THE FUNCTION IN THE .DLL
	     * THE .DLL RETURNS THE PASSWORD IN THE VARIABLE PASSWORD
	     =CALLFN(FUNCHANDLE,FHANDLE,"PASSWORD DIALOG",@PASSWORD,50)
	     PASSWORD=ALLTRIM(PASSWORD) && TRIM PROCEEDING SPACES
	     RELEASE LIBRARY SYS(2004)+'FOXTOOLS'
	
	C Code
	------
	
	Because this is a true .DLL and not an .FLL, all required functions of the .DLL
	must be included. These files are: the C code file, the resource file (RC), and
	the definition file (DEF). These files are required to compile any true Windows
	.DLL file
	
	To generate the .DLL file, you need a text editor and a C for Windows compiler.
	This example was compiled using Visual C++ version 1.5
	
	1. Create a text file with your favorite text editor or use the Visual Workbench
	  if you are using Visual C++. Type in the following code into the file, and
	  save it as MYDLL.C:
	
	     #include <windows.h>
	     #include "mydll.h"
	
	     // Data Structures
	     typedef struct tagXFERBUFFER2
	     {char *lpszTitle;
	     LPSTR lpszBuffer;
	     int *length;
	     }XFERBUFFER2;
	     //Prototyping
	     BOOL FAR PASCAL _export InputBoxDlgProc(HWND hDlg, UINT
	     message,WPARAM wParam, LPARAM lParam);
	     int FAR PASCAL _export WEP(int nShutDownFlag);
	     int FAR PASCAL _export MyInputBox(HWND hWndParent, LPCSTR
	     lpszTitle,LPSTR Buffer, int StrLen);
	     HINSTANCE ghInstance;
	     /*******************************************/ 
	     /* THE FOLLOWING FUNCTION  (LibMain) IS    */ 
	     /* NEEDED FOR EVERY .DLL                   */ 
	     /*******************************************/ 
	     int FAR PASCAL LibMain(HINSTANCE hInstance, WORD wDataSeg,
	     WORD wHeapSize, LPSTR lpszCmdLine)
	     {ghInstance=hInstance;
	     if (wHeapSize > 0)
	     UnlockData(0);
	     ghInstance = hInstance;
	     return 1;}
	     /*******************************************/ 
	     /* THE FOLLOWING FUNCTION  (WEP) IS    */ 
	     /* NEEDED FOR EVERY .DLL                   */ 
	     /*******************************************/ 
	     int FAR PASCAL _export WEP(int nShutDownFlag)
	     { return 1;}
	     /*******************************************/ 
	     /* THE FOLLOWING FUNCTION  (MyInputBox) IS*/ 
	     /* WHAT THE FOXPRO .PRG CALLS*/ 
	     /*******************************************/ 
	     /*******************************************/ 
	     int FAR PASCAL _export MyInputBox(HWND hWndParent,
	     LPCSTR lpszTitle,LPSTR Buffer, int Length)
	     {DLGPROC lpfnInputBoxDlgProc;
	     XFERBUFFER2 XferBuffer;
	     int Result;
	     XferBuffer.lpszTitle = (char *) lpszTitle;
	     XferBuffer.lpszBuffer = (LPSTR) Buffer;
	     XferBuffer.length = &Length;
	     lpfnInputBoxDlgProc= (DLGPROC)
	     MakeProcInstance((FARPROC)InputBoxDlgProc, ghInstance);
	     Result=DialogBoxParam(ghInstance,"INPUTDIALOG",
	     hWndParent,lpfnInputBoxDlgProc,(LPARAM)&XferBuffer);
	     FreeProcInstance((FARPROC)lpfnInputBoxDlgProc);
	     return Result;}
	     /*******************************************/ 
	     BOOL FAR PASCAL _export InputBoxDlgProc(HWND hDlg,
	     UINT message,WPARAM wParam, LPARAM lParam)
	     {static XFERBUFFER2 *XferBuffer;
	     switch(message)
	     {case WM_INITDIALOG :
	     {XferBuffer = (XFERBUFFER2*)lParam;
	     SetWindowText(hDlg, XferBuffer->lpszTitle);
	     return TRUE; }
	     case WM_COMMAND :
	     {switch(wParam)
	     {case IDOK :
	     {int NumChars;
	     NumChars=GetDlgItemText(hDlg,IDD_EDIT,
	     (XferBuffer->lpszBuffer+'\0'),
	     *XferBuffer->length+'\0');
	     EndDialog(hDlg,NumChars);
	     break; }
	     case IDCANCEL :
	     {  EndDialog(hDlg, 0);
	     break;}}}}
	     return FALSE;}
	
	2. Create a new text file, type the following code into it, and save it as
	  MYDLL.DEF:
	
	     LIBRARY    mydll
	     EXETYPE    WINDOWS
	     CODE       PRELOAD MOVEABLE DISCARDABLE
	     DATA       PRELOAD SINGLE
	     HEAPSIZE   1024
	     EXPORTS    MyInputBox
	
	3. Create a new text file. Type the following code into it, and save it as
	  MYDLL.RC:
	
	     #include <windows.h>
	     #include "mydll.h"
	     INPUTDIALOG DIALOG 20, 24, 180, 64
	     STYLE WS_POPUP | WS_CAPTION | DS_SETFONT
	     FONT 8, "Helv"
	     BEGIN
	     CONTROL "", IDD_EDIT, "EDIT", WS_CHILD | WS_VISIBLE | WS_BORDER |
	     WS_TABSTOP | ES_AUTOHSCROLL  | ES_PASSWORD, 10, 20, 160, 12
	     DEFPUSHBUTTON "&OK", IDOK, 47, 42, 40, 14
	     PUSHBUTTON "&Cancel", IDCANCEL, 93, 42, 40, 14
	     END
	
	4. Create a new text file, type the following line of code into it, and save it
	  as MYDLL.H:
	
	     #define IDD_EDIT    200
	
	5. In Visual C++, create a new project and name it PASSWORD.
	
	6. From the Option menu, choose Project, and select "Windows dynamic-link
	  library (DLL)" as the project type.
	
	7. Add the files MYDLL.C, MYDLL.DEF, and MYDLL.RC to the project.
	
	8. From the project menu, choose build PASSWORD.DLL
	
	9. Run the code in FoxPro.
	
	Additional query words: API WinMain
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP500
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

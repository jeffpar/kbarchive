---
layout: page
title: "Q177218: HOWTO: Return Array to VB from VC++ DLL or OLE Server"
permalink: /kb/177/Q177218/
---

## Q177218: HOWTO: Return Array to VB from VC++ DLL or OLE Server

{% raw %}

	Article: Q177218
	Product(s): Microsoft C Compiler
	Version(s): 2000,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbSample kbAutomation kbOSWin2000 kbVC400 kbVC500 kbVC600
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual C++.NET (2002) 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to return an array from a Microsoft Visual C++ DLL
	or OLE server using the ColeSafeArray class included with the Microsoft
	Foundation Classes (MFC).
	
	MORE INFORMATION
	================
	
	You can receive, manipulate, and return Microsoft Visual Basic arrays in
	Microsoft Visual C++ with an understanding of safe arrays. A safe array is an
	array that contains information about the number of dimensions and the bounds of
	its dimensions. Because Microsoft Visual Basic natively uses these types of
	arrays, you have to construct safe arrays of the data you want to pass.
	
	Normally, this is a difficult task, and hard to manage from Microsoft Visual C++.
	However, this task is easier if you use the ColeSafeArray class included with
	the Microsoft Foundation Classes. The following DLL routine demonstrates how to
	use this class to return a 10x10 two-dimensional array of doubles from a DLL.
	
	NOTE: The same code and principles in this sample DLL also apply to an OLE
	server.
	
	Steps to Create the Visual C++ DLL
	----------------------------------
	
	1. Click New on the File menu and choose MFC AppWizard (dll).
	
	2. Name the project "MyDll."
	
	3. Add the following DLL routine to your main .cpp file (MyDll.cpp):
	
	        VARIANT _stdcall retVariantArray(void) {
	           COleSafeArray saRet;
	           DWORD numElements[] = {10, 10}; // 10x10
	
	           // Create the safe-array...
	           saRet.Create(VT_R8, 2, numElements);
	
	           // Initialize it with values...
	           long index[2];
	           for(index[0]=0; index[0]<10; index[0]++) {
	              for(index[1]=0; index[1]<10; index[1]++) {
	                 double val = index[0] + index[1]*10;
	                 saRet.PutElement(index, &val);
	              }
	           }
	
	           // Return the safe-array encapsulated in a VARIANT...
	           return saRet.Detach();
	        }
	
	4. Add the following line to the end of your .def file (MyDll.def):
	
	        retVariantArray
	
	5. Build the DLL.
	
	Steps to Create the Visual Basic Program That Uses the DLL
	----------------------------------------------------------
	
	1. Start Visual Basic 5.0, and then start a new Standard EXE project.
	
	2. Add a Command button to Form1.
	
	3. Add the following code to Form1:
	
	        Private Declare Function retVariantArray Lib "c:\mydll.dll" _
	           () As Variant
	
	        Private Sub Command1_Click()
	           Dim myarr As Variant
	
	           myarr = retVariantArray
	
	           MsgBox "myArr(1,1) = " & myarr(1, 1)
	        End Sub
	
	4. Run the program and click Command1. A message box displays the text
	  "myArray(1,1) = 11."
	
	Other Notes
	-----------
	
	Run-time error 5 "Invalid Procedure Call" or run-time error 11 "Divide by zero"
	may occur when performing this task.
	
	Error 5 often occurs when calling into an OLE server whose method was not
	properly created. To correct this error, re-create this method using
	ClassWizard, choose the appropriate options, and then cut and paste the code
	into your new function.
	
	If Error 11 occurs while attempting to access elements in your array, it may
	indicate that you did not construct the safe array correctly. It might not have
	been completely initialized or it could have been corrupted from logical errors
	in your code. To resolve this error, verify that you are not indexing the array
	past its bounds, or overwriting memory.
	
	REFERENCES
	==========
	
	More information about the ColeSafeArray class, or VARIANT types, is included in
	the Microsoft Visual C++ online help, and/or MSDN.
	
	Additional query words: vb
	
	======================================================================
	Keywords          : kbole kbSample kbAutomation kbOSWin2000 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2000,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

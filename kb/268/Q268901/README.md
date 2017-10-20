---
layout: page
title: "Q268901: HOWTO: Save a File from Visual C++ in UNIX Format"
permalink: /kb/268/Q268901/
---

## Q268901: HOWTO: Save a File from Visual C++ in UNIX Format

{% raw %}

	Article: Q268901
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbEditor kbide kbScript kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbG
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you edit source files in Visual C++ and save them, the lines are terminated
	with the "CR/LF" [carriage return, line feed] character combination. On UNIX
	systems, lines are terminated by "LF". So, when you view files that were edited
	under Windows on UNIX systems you may see many "^M" characters terminating the
	lines. This happens if the editor you are using doesn't know how to interpret
	the Windows file. Visual C++ can open files that have lines that terminate with
	the UNIX-created LF. If you edit this file and save it from Visual C++ then it
	is saved in the Windows format (you will see CR/LF and not the LF that was
	present previously).
	
	This article describes a procedure for saving an edited file created on a Windows
	platform in a format that can be used on UNIX systems.
	
	NOTE: The Visual C++ .NET IDE has a feature available to save a file in UNIX
	format. In IDE, save the file using Save As..., from the Save drop-down list,
	select Save with Encoding..., and thrn click Yes. From the Line Encoding
	drop-down list, select Unix (LF), and then click OK.
	
	MORE INFORMATION
	================
	
	You can use the following steps to create a Win32 console project that will
	convert a file containing "CR/LF" for line termination to "LF":
	
	1. Use the Win32 Console Application AppWizard to create a new empty project
	  named "DOS2UNIX" (without the quotation marks).
	
	2. From the File menu, click New, and then click the Files tab.
	
	3. Select C/C++ Source File and name the new file "DOS2UNIX.cpp" (without the
	  quotation marks).
	
	4. Paste the following code into DOS2UNIX.cpp:
	
	  #include<windows.h>
	  #include<iostream>
	  #include<fstream>
	  using namespace std;
	
	  int main(int argc, char* argv[])
	  {
	  	if(argc !=2)
	  	{
	  		cout << "Please specify : dos2unix filename" << endl;
	  		return 0;
	  	}
	  	char ch;
	  	char temp[MAX_PATH]="\0";
	
	  	//Open the file for reading in binarymode.
	  	ifstream fp_read(argv[1], ios_base::in \ 
	  		| ios_base::binary);
	  	sprintf(temp, "%s.temp", argv[1]);
	  	//Create a temporary file for writing in the binary mode. This
	  	//file will be created in the same directory as the input file.
	  	ofstream fp_write(temp, ios_base::out \ 
	  		| ios_base::trunc \ 
	  		| ios_base::binary);
	
	  	while(fp_read.eof() != true)
	  	{
	  		fp_read.get(ch);
	  		//Check for CR (carriage return)
	  		if((int)ch == 0x0D)
	  			continue;
	  		if (!fp_read.eof())fp_write.put(ch);
	  	}
	
	  	fp_read.close();
	  	fp_write.close();
	  	//Delete the existing input file.
	  	remove(argv[1]);
	  	//Rename the temporary file to the input file.
	  	rename(temp, argv[1]);
	  	//Delete the temporary file.
	  	remove(temp);
	
	  	return 0;
	  }
	
	5. From the Build menu, click Build DOS2UNIX.exe to generate the .exe file.
	
	You may want to test this .exe file to see if it works properly. To do so, open
	an existing file in the Visual C++ binary editor by selecting Open under the
	File menu, selecting DOS2UNIX.ex, setting Open as to Binary, and then clicking
	Open. For example, if the file contains "HelloCRLFWorld", the binary
	(hexadecimal) data would look like:
	
	  48 65 6C 6C 6F 0D 0A 57 6F 72 6C 64
	
	This is equivalent to:
	
	  Hello
	  World
	
	From a command prompt, run the command "dos2unix.exe <file name>" (without
	the quotation marks). Next, open the file in the Visual C++ binary editor. You
	will see that the 0x0Ds are removed. As long as you don't edit the file and save
	it in Visual C++ the 0x0Ds will not appear.
	
	You can use this in conjunction with Visual C++ automation to automate the entire
	process. A simple Microsoft Visual Basic Script macro can be written to call
	this tool, but first this tool must be added to the Tools menu as follows:
	
	1. From the Tools menu, click Customize, and then click the Tools tab.
	
	2. Specify a name, such as "DOS2UNIX" (without the quotation marks), and provide
	  the full path to the Dos2unix.exe file in the Command edit box.
	
	3. For argument, specify "$(FileName)$(FileExt)" (without the quotation marks).
	
	4. For initial directory, specify "$(WkspDir)" (without the quotation marks)
	  (specify your own path).
	
	To verify that the tool works, open a file in the Visual C++ editor, and then
	from the Tools menu run the DOS2UNIX tool. You will see that the file that you
	opened in the editor has had all its CR characters removed.
	
	If you want to automate this process so that every time you save an opened file
	in the Visual C++ editor, the DOS2UNIX.exe tool is called to remove the 0x0Ds,
	then use the following VBScript macro:
	
	  'This event is fired every time the document is saved in the VC++ Editor.
	  Sub Application_DocumentSave(theDocument)
	
	  'This will call the user tool in the Tools menu.
	  'Change the number depending upon what you have. By default you only
	  'have 6 tools under the Tools menu, so the DOS2UNIX tool will be the 7th.
	
	  ExecuteCommand "UserTool7" 
	
	  End Sub
	
	This VBScript code will work only if you have a file open in the Visual C++
	editor. This is the only way to call an .exe file from a VBScript macro (you
	cannot pass parameters to a VBScript macro). You can write an add-in instead,
	and this would be more flexible. You can call the DOS2UNIX.exe tool from an
	add-in without having to add it to the Tools menu.
	
	To use the provided VBScript macro in Visual C++:
	
	1. Open an existing file that has a .dsm extension or create one.
	
	2. Paste the code provided previously into the file.
	
	3. In Visual C++ do the following:
	
	  a. From the Tools menu, click Customize.
	
	  b. Click the Add-ins and Macros Files tab.
	
	  c. Click Browse to load the .dsm file that contains the macro. Once the .dsm
	     file has been selected in the Browse dialog box, your file will appear in
	     the Add-ins and macro file list with a selected checkbox next to it.
	
	  d. Click Close to continue.
	
	Now, if you open a file in the Visual C++ editor and save the file from the File
	menu, the macro will be called and all 0x0Ds will be removed from the opened
	file. Because this will affect any file you save from this point onwards and
	will apply to any project you open in the future, make sure that you disable the
	macro from Tools menu by using Customize (clear the checkbox next to the
	macro).
	
	If you are using Microsoft Visual SourceSafe as the source code management tool,
	then see the following Knowledge Base article:
	
	  Q170750 INFO: End of Line Character Settings for Visual SourceSafe
	
	
	REFERENCES
	==========
	
	For more information see "Developer Studio Objects" in the MSDN Library:
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/vcug98/html/_asug_reference.3a_.developer_studio_objects.asp
	
	Also see "Argument Macros":
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/vcug98/html/_asug_argument_macros.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbEditor kbide kbScript kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

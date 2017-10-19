---
layout: page
title: "Q197290: Euro Currency Not Available in Windows NT 3.51 Character Sets"
permalink: /kb/197/Q197290/
---

## Q197290: Euro Currency Not Available in Windows NT 3.51 Character Sets

	Article: Q197290
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In 1999, countries in the European Community (EC) will begin to use a single
	currency named the euro. The euro has an associated symbol called the euro
	currency symbol. There currently is not a keystroke in Windows NT that maps to
	the euro currency symbol.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem immediately, download the fix as described below. For a
	complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location as Euro351i.exe
	(x86) and Euro351a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT351/hotfixes-postSP5/Euro-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	MORE INFORMATION
	================
	
	Euro currency support for Windows NT 3.51 allows you to input, display, and
	print the euro symbol in applications.
	
	- Fonts - The following fonts have support for the euro after installing
	  Euro-fix:
	
	   - Arial
	
	   - Courier New
	
	   - Lucida Console
	
	   - Lucida Sans Unicode
	
	   - MS Sans Serif
	
	   - Times New Roman
	
	- Keyboards
	
	   - For keyboard assignments of the euro, please see the following Web site:
	
	     http://www.microsoft.com/opentype/faq/faq12.htm
	
	   - If you are using a keyboard without the euro assigned, such as the US
	     keyboard, you can use ALT+0128 to input the euro. While holding the ALT
	     key, press 0128 on the numeric keypad located on the right-hand side of
	     your keyboard.
	
	   - Only keyboard layouts already installed will be updated. If you need to
	     install another keyboard after the euro update, see Loss Of Euro Support
	     below.
	
	- Do not use the euro in certain names
	
	   - Applications will not recognize the euro in a filename or network share
	     name. Although Windows supports the euro in filenames, for maximum
	     compatibility, it should be avoided.
	
	   - Do not use the euro in passwords.
	
	- Shortcut key conflicts
	
	   - Some applications might use a shortcut key that conflicts with the key
	     assigned to the euro. In this case, you can use the numeric keypad
	     ALT+0128 method.
	
	- Notepad
	
	   - Notepad cannot display the euro symbol because it uses an old font that is
	     not euro-ready.
	
	- Perform the following steps to set your system currency to euro:
	
	  1. In Control Panel, double-click International.
	
	  2. Click Change in the Currency Format group.
	
	  3. Enter Euro in the Symbol: box (using either the ALT+0128 or ALTGr+e).
	
	  4. Click OK.
	
	  5. Click OK again.
	
	  Euro is now your system default currency and will be used by applications such
	  as Excel.
	
	- Loss of euro support
	
	  Euro-fix copies euro-ready files to your computer. Only files already
	  installed on your system are updated. Subsequent installations of system
	  components or applications might replace some of these files with files that
	  are not euro-ready. Here are the steps needed to reapply the euro support:
	
	  1. Run "euro351i /x" (or "euro351a /x" for the Alpha version) to extract
	     files without installing.
	
	  2. Go to the folder where you extracted the files.
	
	  3. At a command prompt, type the following to remove Euro-fix:
	
	     hotfix /R NT351EUROUPDATE
	
	  4. Reapply Euro-fix.
	
	For information on the Windows NT 3.51 version of this fix, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q182005 Euro Currency Not Available in Windows NT Character Sets
	
	For information on the Windows NT Terminal Server version of this fix, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q196538 Euro Currency Not Available in Windows NT WTS Character Sets
	
	Additional query words: 3.51 natural language support
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

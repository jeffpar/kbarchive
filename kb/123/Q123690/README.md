---
layout: page
title: "Q123690: Using INTDOSQQ for Keyboard Input in FORTRAN 5.1"
permalink: /kb/123/Q123690/
---

## Q123690: Using INTDOSQQ for Keyboard Input in FORTRAN 5.1

{% raw %}

	Article: Q123690
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information and sample code on how to check for the
	presence of keyboard input and get the keybord input with (or without) echoing
	the keys to the screen.
	
	MORE INFORMATION
	================
	
	Page 273 of the Microsoft FORTRAN version 5.1 "Reference" manual explains how to
	use the INTDOSQQ and INTDOSXQQ subroutines to invoke MS-DOS Interrupt 21h system
	calls. Two of these Int 21h functions, functions 7 and 8, get input from the
	keyboard without echoing that input to the display. The difference between these
	two functions is that function 7 ignores CTRL+C and CTRL+BREAK characters while
	function 8 handles these characters by breaking out of the program. The function
	B (hex) checks to see if a key was pressed. It will return true if a key is
	waiting to be read, and false if it is called after all of the keys have been
	read.
	
	What the Sample Code Does
	-------------------------
	
	The sample code function GETCH uses MS-DOS Int 21h, function 8 to get a character
	from Standard Input without echoing it to the screen.
	
	The sample code subroutine PUTCHAR uses Int 21h function 2 to write a single
	character to the screen.
	
	The sample code PASSWORD uses GETCH to allow input of a password without echoing
	the keystrokes to the display. PUTCHAR is used to display an asterisk for each
	keystroke entered.
	
	The sample code function KBHIT uses Int 21h function B(hex) to check if a key was
	pressed. It returns 0 if no key is available and returns non-zero if a key was
	pressed. Use GETCH to get the key(s).
	
	NOTE: If several of the routines are put into the same file, then the statement:
	
	  include 'flib.fi'
	
	should only be included once at the beginning of that file. (FLIB.FD needs to be
	included in each subroutine, but FLIB.FI does not.)
	
	Sample Code: GETCH
	------------------
	
	  C Compile options needed: none
	        include 'flib.fi'
	        integer*2 function getch
	        include 'flib.fd'
	        record /regs$info/ in,out
	        in.bregs.ah=#08             ! Function 8 - STDIN Input (no echo)
	        call intdosqq(in,out)       ! Int 21h
	        getch=out.bregs.al          ! Input data returned in AL
	        return
	        end
	
	Sample Code: PUTCHAR
	--------------------
	
	  C Compile options needed: none
	
	        include 'flib.fi'
	        subroutine putchar( ch )
	        include 'flib.fd'
	        record /regs$info/ in,out
	        character*1 ch
	        in.bregs.ah=#02             ! Function 2 - Display Output
	        in.bregs.dl=ch              ! Character to display goes in DL
	        call intdosqq(in,out)       ! Int 21h
	        return
	        end
	
	Sample Code: PASSWORD
	---------------------
	
	C Compile options needed: none
	
	        include 'flib.fi'
	        program password
	        character*80 pass
	        logical get_pass/.true./ 
	        integer*2 i,j,getch
	        write(*,'(1x,a,\)') 'ENTER PASSWORD > '
	        i=1
	        do while (get_pass)
	           j=getch()                  ! Get a character of the password
	           if (j.le.32) then
	              if (j.eq.8.and.i.gt.1) then ! BACKSPACE key pressed
	                 i=i-1
	                 call putchar( char(j) )! Move cursor back one character
	                 call putchar( ' ' )    ! Write a blank over the asterisk
	                 call putchar ( char(j) )! Move cursor back to blanks
	                 pass(i:i+1) = '  '
	              endif
	              if (j.eq.13) get_pass=.false.! ENTER key pressed -- exit
	           else
	              call putchar( '*' )        ! Echo asterisk to display
	              pass(i:i)=char(j)          ! Add input character to string
	              i=i+1
	              if (i.gt.80) get_pass=.false. ! Don't write past string end
	           endif
	        enddo
	        write(*,*)
	        write(*,*) 'password entered > ',pass
	        end
	
	Sample Code: KBHIT
	------------------
	
	  C Compile options needed: none
	        include 'flib.fi'
	        integer*2 function kbhit
	        include 'flib.fd'
	        record /regs$info/ in,out
	        in.bregs.ah=#0B             ! Function B - Get STDIN Status
	        call intdosqq(in,out)       ! Int 21h
	        kbhit=out.bregs.al          ! Input data returned in AL
	        return
	        end
	
	REFERENCES
	==========
	
	For detailed information about the various Int 21h functions, consult any MS-DOS
	programmer's reference manual.
	
	Additional query words: kbinf 5.10 getc getchar console putc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
